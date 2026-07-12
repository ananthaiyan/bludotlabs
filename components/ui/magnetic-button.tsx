"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export const MagneticButton = ({
    children,
    strength = 0.8,
    maxDistance = 100,
}: {
    children: React.ReactNode;
    strength?: number;
    maxDistance?: number;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { width, height, left, top } =
            ref.current.getBoundingClientRect();

        const xOffset = (e.clientX - (left + width / 2)) * strength;
        const yOffset = (e.clientY - (top + height / 2)) * strength;

        const distance = Math.hypot(xOffset, yOffset);

        if (distance > maxDistance) {
            const scale = maxDistance / distance;
            setPosition({
                x: xOffset * scale,
                y: yOffset * scale,
            });
        } else {
            setPosition({
                x: xOffset,
                y: yOffset,
            });
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <motion.div
                animate={{
                    x: position.x,
                    y: position.y,
                }}
                transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 18,
                    mass: 0.2,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
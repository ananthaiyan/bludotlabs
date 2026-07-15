'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MotionTextProps {
  children: ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export default function MotionText({ children, tag = 'p', className = '', delay = 0, stagger = true }: MotionTextProps) {
  const Component = motion.create(tag);

  if (!stagger) {
    return (
      <Component
        className={className}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </Component>
    );
  }

  // Staggered word animation
  if (typeof children !== 'string') return null; // Safe fallback if stagger is wrongly true

  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * 0.5 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 150,
      },
    },
  };

  return (
    <Component
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    console.log("clicked");
  };
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <div className="navbar-inner">
          <Link href="/">
            <Image
              src={scrolled ? "/logo2.png" : "/logo.png"}
              alt="Bludot Labs"
              width={scrolled ? 42 : 170}
              height={scrolled ? 42 : 160}
              priority
            />
          </Link>

          <nav className="desktop-nav">
            <Link href="/solutions">Solutions</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/products">Products</Link>
            {/* <Link href="/research">Research</Link> */}
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {!scrolled && (
            <Link href="/contact" className="btn btn-primary">Request Audit <span className="arrow">→</span></Link>
          )}


          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {[
          ["Solutions", "/solutions"],
          ["Case Studies", "/case-studies"],
          ["Products", "/products"],
          ["Research", "/research"],
          ["About", "/about"],
          ["Contact", "/contact"],
        ].map(([name, href]) => (
          <Link
            key={href}
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
} 
"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          SYECH<span>.DEV</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="status-pill">
          <span className="status-dot"></span> open_to_work
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div style={{ padding: "0 28px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyling =
    "relative text-gray-700 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full";

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      {/* Desktop links - hidden on mobile */}
      <div className="hidden md:flex gap-12">
        <Link className={linkStyling} href="/">
          Home
        </Link>
        <Link className={linkStyling} href="/projects">
          Projects
        </Link>
        <Link className={linkStyling} href="/resume">
          Resume
        </Link>
      </div>

      {/* Mobile hamburger button - hidden on desktop */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute z-1000 top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col md:hidden">
          <Link className="px-6 py-3" href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            className="px-6 py-3"
            href="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="px-6 py-3"
            href="/resume"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}

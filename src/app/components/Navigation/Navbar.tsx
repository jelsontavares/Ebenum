"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const projectRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleProject = () => setProjectOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (projectRef.current && !projectRef.current.contains(event.target as Node)) {
        setProjectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-16 py-32 flex items-center justify-between">
        {/* Brand */}
        <div className="text-[#ac8e5c] text-xl md:text-2xl font-semibold tracking-wide">Ebenum</div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="#" className="text-[#ebe9e2] text-sm hover:opacity-80">
                Serviços
              </Link>
            </li>
            <li className="relative" ref={projectRef}>
              <button
                onClick={toggleProject}
                className="text-[#ebe9e2] text-sm flex items-center gap-1 hover:opacity-80"
              >
                Project
                <ChevronDown size={16} aria-hidden="true" />
              </button>

              {projectOpen && (
                <ul className="absolute bg-[#3e2b1d] text-[#ebe9e2] mt-2 shadow-md p-2 w-40 z-10">
                  <li>
                    <Link href="#" className="block px-3 py-2 hover:bg-[#4a3627]">Branding</Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-3 py-2 hover:bg-[#4a3627]">Editorial</Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-3 py-2 hover:bg-[#4a3627]">Marketing</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="#" className="text-[#ebe9e2] text-sm hover:opacity-80">About Us</Link>
            </li>
            <li>
              <Link href="#" className="text-[#ebe9e2] text-sm hover:opacity-80">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {hasMounted && (
            <button onClick={toggleMenu} aria-label="Abrir menu">
              {isOpen ? (
                <X size={28} className="text-[#ebe9e2]" aria-hidden="true" />
              ) : (
                <Menu size={28} className="text-[#ebe9e2]" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {hasMounted && isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-[#3e2b1d] px-6 py-4 shadow-lg"
        >
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>Serviços</Link>
            </li>
            <li>
              <button
                onClick={toggleProject}
                className="text-[#ebe9e2] text-sm flex items-center gap-1"
              >
                Project
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              {projectOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li>
                    <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>Branding</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>Editorial</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>Marketing</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>About Us</Link>
            </li>
            <li>
              <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

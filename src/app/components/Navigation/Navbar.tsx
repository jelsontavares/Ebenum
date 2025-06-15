"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <li>
        <Link href="#" className="text-[#ebe9e2] text-sm hover:opacity-80" onClick={onClick}>
          Services
        </Link>
      </li>
      <li>
        <Link href="#" className="text-[#ebe9e2] text-sm hover:opacity-80" onClick={onClick}>
          About Us
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className="text-[#ebe9e2] text-sm hover:opacity-80" onClick={onClick}>
          Contact Us
        </Link>
      </li>
    </>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => {
    setIsOpen(false);
    setProjectOpen(false);
  };

  useEffect(() => {
    setHasMounted(true);
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    }
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
    <header className="fixed w-full z-50 bg-transparent">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-[#ac8e5c] text-xl md:text-2xl font-semibold tracking-wide">
          <Image
            src="/images/logo.png"
            alt="Brand Logo"
            width={90}
            height={60}
            className="inline-block mr-2"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <NavLinks />
            <li
              className="relative group"
              onClick={() => {
                if (isTouchDevice) setProjectOpen((prev) => !prev);
              }}
              onMouseLeave={() => {
                if (isTouchDevice) setProjectOpen(false);
              }}
            >
            <div className="text-[#ebe9e2] text-sm hover:opacity-80 cursor-pointer">
              Projects
            </div>

          <div
            className={`
              absolute left-0 mt-2 hidden group-hover:block 
              ${projectOpen ? "block" : ""}
              text-[#ebe9e2] shadow-md rounded-md p-2 w-40 z-10 transition-all duration-300 ease-in-out
            `}
          >
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="#" className="block px-3 py-2 hover:bg-[#ac8e5c]/20 rounded">
                Branding
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-3 py-2 hover:bg-[#ac8e5c]/20 rounded">
                Editorial
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-3 py-2 hover:bg-[#ac8e5c]/20 rounded">
                Marketing
              </Link>
            </li>
            </ul>
          </div>
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
          className="md:hidden  border-t border-[#ac8e5c]/30 px-6 py-6 shadow-lg"
        >
          <ul className="flex flex-col gap-4">
            <NavLinks onClick={closeMenu} />
            <li>
              <button
                onClick={() => setProjectOpen((prev) => !prev)}
                className="text-[#ebe9e2] text-sm"
              >
                Projects
              </button>
              {projectOpen && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li>
                    <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>
                      Editorial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#ebe9e2] text-sm" onClick={closeMenu}>
                      Marketing
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

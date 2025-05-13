import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <ul className="flex flex-wrap justify-center gap-8 text-[#AC8E5C] text-sm text-center">
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Project</Link>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
        <div className="flex items-center gap-6 rounded-full border border-neutral-800 bg-[#111111]/80 px-4 py-1 backdrop-blur-md shadow-lg">
          
          {/* Avatar */}
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/avatar.webp"
              alt="Avatar"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-300 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-white px-6 py-2 text-sm font-heading-600 text-neutral-500"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 translate-x-full bg-[#d0ff71] transition-transform duration-300 group-hover:translate-x-0" />
          </Link>
        </div>
      </nav>
    </>
  );
}

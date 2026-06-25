"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems, siteMeta } from "@/data/siteData";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <div className="fixed top-0 right-0 w-[65px] h-[60px] text-center z-[100]">
        <button
          onClick={toggleMenu}
          className={`relative w-[65px] h-[60px] inline-block transition-all duration-200 ${
            isOpen ? "bg-none" : ""
          }`}
          aria-label="Menu"
        >
          <span
            className={`absolute right-[15px] h-[1.5px] bg-[#333] rounded-none transition-all duration-200 ${
              isOpen
                ? "top-[29px] w-[35px] -translate-y-0 rotate-[-45deg] bg-[#aaa]"
                : "top-[18px] w-[35px]"
            }`}
          />
          <span
            className={`absolute right-[15px] top-[29px] h-[1.5px] bg-[#333] rounded-none transition-all duration-200 ${
              isOpen ? "w-[30px] opacity-0" : "w-[30px] opacity-100"
            }`}
          />
          <span
            className={`absolute right-[15px] h-[1.5px] bg-[#333] rounded-none transition-all duration-200 ${
              isOpen
                ? "top-[29px] w-[35px] translate-y-0 rotate-[45deg] bg-[#aaa]"
                : "top-[40px] w-[25px]"
            }`}
          />
        </button>
      </div>

      {/* Navigation overlay */}
      <nav
        className={`fixed inset-0 z-[95] bg-white/95 overflow-auto transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-screen flex flex-col items-center justify-center py-12 px-[2%]">
          <ul className="text-center">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="font-libre font-normal text-[1.25em] tracking-[0.15em] my-8"
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-20 mb-0">
            <h3 className="font-libre font-normal text-[1.1em] tracking-[0.15em] text-center">
              MEOW
            </h3>
            <ul className="text-center mt-8">
              <li className="w-[1.7em] inline-block align-middle mx-4">
                <a
                  href={siteMeta.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

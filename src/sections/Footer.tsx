"use client";

import Link from "next/link";
import { navItems, siteMeta } from "@/data/siteData";
import { useInView } from "@/hooks/useInView";

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className={`footer py-16 transition-all duration-500 ease-in ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <ul className="footer_navi py-[15%] px-[5%] text-center lg:py-[10%]">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="inline-block align-top mx-[0.8em] my-4 font-libre tracking-[0.1em]"
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile social */}
      <div className="lg:hidden follow mb-20">
        <h3 className="font-libre font-normal text-[1em] tracking-[0.1em] text-center">
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

      <p className="copyright text-[0.8em] text-center opacity-60 pb-16">
        {siteMeta.copyright}
      </p>
    </footer>
  );
}

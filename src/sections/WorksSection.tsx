"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { galleryCategories, galleryData, type GalleryCategoryKey } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { useInView } from "@/hooks/useInView";

export function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryKey>("cute");
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    setActiveCategory("cute");
  }, []);

  return (
    <section className="area works py-[15%] lg:py-[10%] lg:pb-[10%]">
      <div className="lg:flex lg:items-start">
        <SectionTitle title="GALLERY" className="lg:w-[30%] lg:pr-[5%] lg:text-right lg:border-l-0 lg:ml-0 lg:pl-0" />

        <div
          ref={ref}
          className={`works_in inner pt-[10%] px-[10%] transition-all duration-500 ease-in ${
            isInView ? "opacity-100" : "opacity-0"
          } lg:pt-0 lg:px-0 lg:ml-[5%] lg:w-[60%]`}
        >
          {/* Category tabs */}
          <ul className="catlist mb-16">
            {galleryCategories.map((cat) => (
              <li
                key={cat.key}
                className={`w-1/3 lg:w-1/5 float-left text-center ${
                  activeCategory === cat.key ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <span className="block cursor-pointer leading-8 relative py-4 pb-2">
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#eee]" />
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#d4a574] transition-all duration-[400ms] ${
                      activeCategory === cat.key ? "w-full" : "w-0"
                    }`}
                  />
                  {cat.label}
                </span>
              </li>
            ))}
          </ul>

          {/* Gallery content */}
          <div className="works_content clear-both">
            {galleryCategories.map((cat) => (
              <ul
                key={cat.key}
                className={`postlist list_${cat.key} ${
                  activeCategory === cat.key ? "block" : "hidden"
                } lg:w-[106%] lg:-ml-[3%] lg:mb-8`}
              >
                {galleryData[cat.key].map((item, idx) => (
                  <li
                    key={idx}
                    className="py-6 border-b border-[#eee] first:pt-0 lg:float-left lg:w-1/3 lg:px-[3%] lg:border-none lg:py-0"
                  >
                    <div className="post_data text-[0.9em]">
                      <Link
                        href={item.href}
                        className="block hover:opacity-70 transition-opacity"
                      >
                        <p className="text">{item.title}</p>
                        <p className="text-[#999]">{item.note}</p>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="viewbtn mt-12 clear-both lg:text-right">
            <ViewMoreButton href="/gallery/" />
          </div>
        </div>
      </div>
    </section>
  );
}

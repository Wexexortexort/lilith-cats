"use client";

import Image from "next/image";
import { catProfiles } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { useInView } from "@/hooks/useInView";

function CatCard({
  cat,
  index,
}: {
  cat: (typeof catProfiles)[number];
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-in ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Cat image */}
      <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority={index === 0}
        />
      </div>

      {/* Cat name + personality */}
      <h3 className="font-normal mb-[1.2em]">
        <span className="text-[1.7em] tracking-[0.3em]">{cat.name}</span>
        <span className="text-[#aaa] ml-3 text-[0.9em]">
          {cat.gender} {cat.nameEn}
        </span>
        <span
          className="inline-block ml-3 text-[0.7em] px-3 py-1 border border-[#d4a574] text-[#d4a574] rounded-full"
        >
          {cat.personality}
        </span>
      </h3>

      {/* Cat details */}
      <ul>
        {cat.details.map((detail) => (
          <li key={detail.label} className="my-[0.7em] text-[0.95em]">
            <span className="after:content-['：'] text-[#999]">{detail.label}</span>
            {detail.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProfileSection() {
  const { ref: titleRef, isInView: titleInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="area profile relative py-[15%] lg:py-[10%] lg:pb-[5%]">
      {/* Mobile title */}
      <div className="lg:hidden">
        <SectionTitle title="ABOUT" />
      </div>

      <div className="lg:flex lg:items-start">
        {/* Desktop title */}
        <div
          ref={titleRef}
          className={`lg:w-[30%] lg:pr-[5%] transition-all duration-500 ease-in ${
            titleInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="hidden lg:block">
            <div className="midashi border-l border-black -ml-px text-[1.4em] lg:text-[1.5em] xl:text-[1.8em] font-libre tracking-[0.2em] pl-[10%] leading-[1.4]">
              <h2 className="relative inline-block">
                <span className="inline-block transition-[clip-path] duration-[800ms] ease-out"
                  style={{ clipPath: titleInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}>
                  ABOUT
                </span>
                <span className="absolute top-0 left-0 -z-10 text-[#eee]">ABOUT</span>
              </h2>
            </div>
          </div>

          {/* Slogan */}
          <div className="hidden lg:block mt-12 pl-[10%]">
            <p className="text-[1.1em] text-[#d4a574] tracking-[0.15em] leading-relaxed">
              好运常在
              <br />
              万事大吉
            </p>
          </div>
        </div>

        {/* Two cat cards */}
        <div className="lg:w-[60%] lg:ml-[5%] pt-[10%] lg:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[8%] lg:gap-[5%]">
            {catProfiles.map((cat, index) => (
              <CatCard key={cat.nameEn} cat={cat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { scheduleItems } from "@/data/siteData";
import { SectionTitle } from "@/components/SectionTitle";
import { useInView } from "@/hooks/useInView";

export function ScheduleSection() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="area schedule py-[15%] lg:py-[10%] lg:pb-[5%]">
      <div className="lg:flex lg:items-start">
        <SectionTitle title="MILESTONES" className="lg:w-[30%] lg:pr-[5%] lg:text-right lg:border-l-0 lg:ml-0 lg:pl-0" />

        <div
          ref={ref}
          className={`mt-[10%] lg:mt-0 transition-all duration-500 ease-in ${
            isInView ? "opacity-100" : "opacity-0"
          } lg:w-[60%] lg:ml-[5%]`}
        >
          <div className="pt-[10%] px-[10%] lg:pt-0 lg:px-0">
            {/* Vertical timeline */}
            <div className="relative pl-8 border-l border-[#eee]">
              {scheduleItems.map((item, index) => (
                <div
                  key={`${item.year}${item.month}${item.day}`}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(2rem+3px)] top-1 w-2 h-2 rounded-full bg-[#d4a574]" />

                  {/* Date */}
                  <div className="font-libre text-[0.85em] text-[#aaa] mb-3 tracking-[0.1em]">
                    {'displayDate' in item && item.displayDate
                      ? item.displayDate
                      : `${item.year}.${String(item.month).padStart(2, "0")}.${String(item.day).padStart(2, "0")}`
                    }
                    <span className="ml-2 text-[0.85em]">{item.week}</span>
                  </div>

                  {/* Events */}
                  {item.events.map((event, idx) => (
                    <div key={idx} className="mb-3 last:mb-0">
                      <span className="inline-block text-center px-3 py-1 border border-[#d4a574] text-[#d4a574] text-[0.75em] rounded-full mr-3">
                        {event.category}
                      </span>
                      <Link
                        href={event.href}
                        className="inline hover:opacity-70 transition-opacity"
                      >
                        {event.title}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

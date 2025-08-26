"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import arrowUpRight from "../../public/assets/arrow-up-right.svg";
import SplitType from "split-type";  // Correct import

export default function PowerfulSolutions() {
  const [selectedTab, setSelectedTab] = useState<string>("ResolveCX");
  const [isHovering, setIsHovering] = useState(false);

  // === NEW: ref for the area we want to animate ===
  const headingAreaRef = useRef<HTMLDivElement>(null);

  // === NEW: GSAP + SplitType animation (chars fade to black on scroll) ===
  useEffect(() => {
    let split: any;
    let ctx: any;

    (async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!headingAreaRef.current) return;

      // Split only the elements you tag with data-animate="split-to-black"
      split = new SplitType(
        headingAreaRef.current.querySelectorAll('[data-animate="split-to-black"]'),
        { types: "lines, words, chars" }
      );

      ctx = gsap.context(() => {
        gsap.set(split.chars, { willChange: "color" });

        gsap.to(split.chars, {
          color: "#1C1C1C", // turn black on scroll
          stagger: { each: 0.02, from: "start" },
          ease: "none",
          scrollTrigger: {
            trigger: headingAreaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            // markers: true, // turn on if you want to debug
          },
        });
      }, headingAreaRef);
    })();

    return () => {
      ctx?.revert();
      split?.revert(); // put the DOM back
    };
  }, []);

  const tabs = ["ResolveCX", "Artificial Intelligence", "Modern Cloud Applications", "Smart Customer Care"];

  return (
    <div className="flex flex-col px-4 bg-[#DFDFDF33] py-8 md:py-12">
      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto" ref={headingAreaRef}>
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight"
          // === NEW: tag this for the split/scroll animation ===
          data-animate="split-to-black"
        >
          <span className="text-[#1C1C1C]">Transform your </span>
          <span className="text-[#828282]">ideas into powerful solutions.</span>
        </h1>

        <div className="h-4 md:h-6"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold"
            // === NEW: tag this line too ===
            data-animate="split-to-black"
          >
            <span className="text-[#A7A7A7]">Just lik</span>
            <span className="text-[#DFDFDF]">e they did!</span>
          </div>

          <button className="bg-[#003462] text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-[#002540] transition-colors">
            Start building yours
            <span className="ml-2">
              <Image src={arrowUpRight} alt="arrow up right" width={18} height={18} priority />
            </span>
          </button>
        </div>
      </div>

      <div className="h-8 md:h-12"></div>

      {/* Tabs and Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto w-full">
        {/* Tabs */}
        <div className="flex lg:flex-col gap-4 overflow-x-auto pb-2 lg:pb-0 lg:w-1/4">
          {tabs.map((item) => (
            <div
              key={item}
              onMouseEnter={() => {
                setSelectedTab(item);
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => setSelectedTab(item)}
              className={`py-3 px-6 text-left whitespace-nowrap transition-all duration-300 cursor-pointer flex-shrink-0
                ${
                  selectedTab === item
                    ? "bg-[#1C1C1C] text-white rounded-l-full lg:rounded-l-full lg:rounded-r-none shadow-lg"
                    : "bg-[white] border border-[#DFDFDF] rounded-full hover:bg-[#1C1C1C] hover:text-white"
                }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-3/4">
          <div
            className="bg-white p-4 md:p-6 rounded-lg lg:rounded-l-none rounded-r-lg shadow-sm"
            onMouseEnter={() => setIsHovering(false)}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4">{selectedTab}</h2>
            <p className="text-base md:text-lg text-[#1C1C1C] mb-6">
              {selectedTab} is a powerful solution that utilizes cutting-edge technology to enhance user experience and
              business outcomes. Explore its full potential!
            </p>

            <Image
              src="/assets/video.gif"
              alt={`${selectedTab} Video`}
              width={500}
              height={300}
              className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 object-cover rounded-lg shadow-md"
            />

            <div className="mt-6">
              <p className="text-base md:text-lg text-[#1C1C1C] mb-4">
                At CodeCones, we&apos;re excited to launch {selectedTab}—an innovative solution designed to optimize your
                processes.
              </p>
              <p className="text-base md:text-lg text-[#1C1C1C]">Stay tuned—this is just the beginning of smarter solutions!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import arrowUpRight from "../../public/assets/arrow-up-right.svg";

gsap.registerPlugin(ScrollTrigger);

export default function PowerfulSolutions() {
  const [selectedTab, setSelectedTab] = useState<string>("ResolveCX");
  const [isHovering, setIsHovering] = useState(false);

  const tabs = ["ResolveCX", "Artificial Intelligence", "Modern Cloud Applications", "Smart Customer Care"];

  useEffect(() => {
    const container = document.querySelector(".anim-section");
    if (!container) return;
    
    const splits: SplitType[] = [];
    container.querySelectorAll(".split-anim").forEach((el) => {
      splits.push(new SplitType(el as HTMLElement, { types: "chars" }));
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 110%",
        end: "+=150%",
        scrub: 0.5,
        markers: false,
      },
    });

    splits.forEach((split) => {
      tl.to(split.chars, { color: "#1C1C1C", stagger: 0.05, duration: 1 });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#DFDFDF33] anim-section">
      {/* Main container with consistent side margins */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12">
        {/* Heading section - removed centering wrapper */}
        <div className="w-full">
          <h1 className="text-left text-[20px] sm:text-[28px] md:text-[34px] lg:text-[50px] font-bold leading-tight">
            <span className="text-[#1C1C1C] split-anim">Transform your </span>
            <span className="text-[#828282] split-anim">ideas into powerful solutions</span>
          </h1>

          {/* Space between headline and the row below */}
          <div className="h-3 sm:h-4 md:h-6"></div>

          {/* Row with aligned content */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 w-full">
            <div className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-tight">
              <span className="text-[#A7A7A7] split-anim">Just lik</span>
              <span className="text-[#DFDFDF] split-anim">e they did!</span>
            </div>

            <button className="bg-[#003462] text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-[#002540] transition-colors w-fit self-start sm:self-auto">
              Start building yours
              <span className="ml-2">
                <Image src={arrowUpRight} alt="arrow up right" width={18} height={18} priority />
              </span>
            </button>
          </div>
        </div>

        {/* Spacing between sections */}
        <div className="h-8 md:h-12"></div>

        {/* Tabs and content section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
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

          {/* Content */}
          <div className="w-full lg:w-3/4">
            <div
              className="p-4 md:p-6 rounded-lg lg:rounded-l-none rounded-r-lg"
              onMouseEnter={() => setIsHovering(false)}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4">
                {selectedTab}
              </h2>
              <p className="text-base md:text-lg text-[#1C1C1C] mb-6">
                {selectedTab} is a powerful solution that utilizes cutting-edge technology to enhance user experience and business outcomes. Explore its full potential!
              </p>

              <Image
                src="/assets/video.gif"
                alt={`${selectedTab} Video`}
                width={500}
                height={300}
                className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 object-cover rounded-[20px] shadow-md"
              />

              <div className="mt-6">
                <p className="text-base md:text-lg text-[#1C1C1C] mb-4">
                  At CodeCones, we&apos;re excited to launch {selectedTab}—an innovative solution designed to optimize your processes.
                </p>
                <p className="text-base md:text-lg text-[#1C1C1C]">
                  Stay tuned—this is just the beginning of smarter solutions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
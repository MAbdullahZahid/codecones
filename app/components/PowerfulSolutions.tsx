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
  // Split each span individually
  const splits: SplitType[] = [];
  document.querySelectorAll(".split-anim").forEach((el) => {
    splits.push(new SplitType(el as HTMLElement, { types: "chars" }));
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".anim-section",
      start: "top 110%",
      end: "+=150%",
      scrub: 0.5,
      markers: true,
    },
  });

  // Animate each span group sequentially
  splits.forEach((split) => {
    tl.to(split.chars, {
      color: "#1C1C1C",
      stagger: 0.05,
      duration: 1,
    });
  });

  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);



  return (
    <div className="flex flex-col px-4 bg-[#DFDFDF33] py-8 md:py-12 anim-section">
      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto anim-heading">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight">
  <span className="text-[#1C1C1C] split-anim">Transform your </span>
  <span className="text-[#828282] split-anim">ideas into powerful solutions.</span>
</h1>

        <div className="h-4 md:h-6"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold">
           <span className="text-[#A7A7A7] split-anim">Just lik</span>
    <span className="text-[#DFDFDF] split-anim">e they did!</span>
          </div>

          <button className="bg-[#003462] text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-[#002540] transition-colors">
            Start building yours
            <span className="ml-2">
              <Image src={arrowUpRight} alt="arrow up right" width={18} height={18} priority />
            </span>
          </button>
        </div>
      </div>

      {/* Rest of your content (tabs, etc.) remains same */}
      <div className="h-8 md:h-12"></div>
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
                ${selectedTab === item
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
            className="bg-white p-4 md:p-6 rounded-lg lg:rounded-l-none rounded-r-lg shadow-sm"
            onMouseEnter={() => setIsHovering(false)}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4">{selectedTab}</h2>
            <p className="text-base md:text-lg text-[#1C1C1C] mb-6">
              {selectedTab} is a powerful solution that utilizes cutting-edge technology to enhance user experience and business outcomes. Explore its full potential!
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
  );
}

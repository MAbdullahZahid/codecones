"use client"
import { useState } from "react";
import Image from 'next/image';
import arrowUpRight from "../../public/assets/arrow-up-right.svg";

export default function PowerfulSolutions() {
  // Step 1: Create a state for selected tab
  const [selectedTab, setSelectedTab] = useState("ResolveCX");

  // Step 2: Handle tab click to change selected tab
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col px-4 bg-[#DFDFDF33]">
      <div className="mt-10 text-3xl text-center sm:text-4xl sm:font-medium md:text-[35px] md:font-bold lg:text-[42px] leading-[1.1] font-bold max-w-screen-lg">
        <span className="text-[#1C1C1C]">Transform your </span>
        <span className="text-[#828282]">ideas into powerful solutions.</span>
      </div>

      <div className="h-4"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-screen-lg w-full mt-4">
        <div className="text-3xl text-center sm:text-4xl sm:font-medium md:text-[42px] md:font-bold lg:text-[50px] leading-[1.1] text-[#A7A7A7] font-bold">
          <span className="text-[#A7A7A7]">Just lik</span>
          <span className="text-[#DFDFDF]">e they did!</span>
        </div>

        <div className="bg-[#003462] text-white py-2 px-6 rounded-full flex items-center justify-center mt-4 lg:mt-0 ml-0 lg:ml-6">
          Start building yours
          <span className="ml-2">
            <Image src={arrowUpRight} alt="arrow up right" width={18} height={18} priority />
          </span>
        </div>
      </div>

      <div className="h-8"></div>

      <div className="flex">
        {/* Step 3: Render list of tabs vertically */}
        <div className="flex flex-col items-start gap-4 mr-8 list-none">
          {["ResolveCX", "Artificial Intelligence", "Modern Cloud Applications", "Smart Customer Care"].map((item) => (
            <li
              key={item}
              onClick={() => handleTabClick(item)}
              className={`py-3 px-6 text-black cursor-pointer w-full ${
                selectedTab === item
                  ? "bg-[#1C1C1C] text-white rounded-l-full rounded-r-none"
                  : "bg-[#DFDFDF] border-2 border-[#1C1C1C] rounded-full"
              }`}
            >
              {item}
            </li>
          ))}
        </div>

        {/* Step 4: Conditionally render content based on selected tab */}
        <div className="flex-grow">
          {selectedTab === "ResolveCX" && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold">ResolveCX</h2>
              <p>A SaaS-Based Case Management Solution with AI Insights. A SaaS-Based Case Management Solution with AI Insights.</p>

              {/* Correct path for .gif file */}
              <img
                src="../../public/assets/video.gif" // Reference the gif file correctly
                alt="ResolveCX Video"
              
              />

              <div className="mt-4">
                <p>At CodeCones, we’re excited to launch ResolveCX—an AI-powered SaaS solution that transforms customer issue management. By predicting and preventing problems through machine learning, ResolveCX helps businesses resolve cases faster, boost satisfaction, and drive growth.</p>
                <p>Stay tuned—this is just the beginning of smarter customer experiences!</p>
              </div>
            </div>
          )}

          {/* Repeat for other tabs here */}
        </div>
      </div>
    </div>
  );
}

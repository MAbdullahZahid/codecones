import { useState } from "react";
import Image from 'next/image';
import arrowUpRight from "../../public/assets/arrow-up-right.svg";

export default function PowerfulSolutions() {
  const [selectedTab, setSelectedTab] = useState<string>("ResolveCX");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    setIsMobileMenuOpen(false);
  };

  const tabs = ["ResolveCX", "Artificial Intelligence", "Modern Cloud Applications", "Smart Customer Care"];

  return (
    <div className="flex flex-col px-4 bg-[#DFDFDF33] py-8 md:py-12">
      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight">
          <span className="text-[#1C1C1C]">Transform your </span>
          <span className="text-[#828282]">ideas into powerful solutions.</span>
        </h1>
        
        <div className="h-4 md:h-6"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold text-[#A7A7A7]">
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
        {/* Mobile Tab Selector */}
        <div className="lg:hidden relative">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full py-4 px-6 bg-[#1C1C1C] text-white rounded-full flex items-center justify-between"
          >
            <span>{selectedTab}</span>
            <svg 
              className={`w-5 h-5 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {tabs.map((item) => (
                <div
                  key={item}
                  onClick={() => handleTabClick(item)}
                  className={`py-3 px-6 cursor-pointer transition-colors ${
                    selectedTab === item
                      ? "bg-[#1C1C1C] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:flex flex-col items-start gap-4 w-full lg:w-1/4">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => handleTabClick(item)}
              className={`py-3 px-6 text-left w-full transition-all duration-300 rounded-full lg:rounded-l-full lg:rounded-r-none ${
                selectedTab === item
                  ? "bg-[#1C1C1C] text-white shadow-lg"
                  : "bg-[#DFDFDF] border border-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-3/4">
          <div key={selectedTab} className="bg-white p-4 md:p-6 rounded-lg lg:rounded-l-none lg:rounded-r-lg shadow-sm">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4">{selectedTab}</h2>
            <p className="text-base md:text-lg text-[#1C1C1C] mb-6">
              {selectedTab} is a powerful solution that utilizes cutting-edge technology to enhance user experience and business outcomes. Explore its full potential!
            </p>

            <img
              src="/assets/video.gif"
              alt={`${selectedTab} Video`}
              className="w-full h-auto max-h-64 sm:max-h-80 md:max-h-96 object-cover rounded-lg shadow-md"
            />

            <div className="mt-6">
              <p className="text-base md:text-lg text-[#1C1C1C] mb-4">
                At CodeCones, we're excited to launch {selectedTab}—an innovative solution designed to optimize your processes. By leveraging advanced technologies, we provide powerful insights to drive success in various industries.
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
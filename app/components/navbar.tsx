"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../public/assets/logo.svg";
import downArrow from "../../public/assets/down-arrow.svg";
import arrowUpRight from "../../public/assets/arrow-up-right.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
    
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="Logo"
            width={300}
            height={48}
            priority
            className="max-[1150px]:w-[220px] max-[800px]:w-[180px]"
          />
        </div>

        <nav className="hidden max-[800px]:hidden flex-grow justify-center md:flex">
          <ul className="flex space-x-12 max-[1150px]:space-x-4">
            {["Home", "About", "Products", "Services", "Blogs"].map((item, idx) => (
              <li key={idx} className={idx > 1 ? "flex items-center space-x-1" : ""}>
                <a
                  href={item === "Home" ? "/" : item === "About" ? "/aboutus" : "#"} // updated href
                  className="text-[18px] max-[1150px]:text-[14px] font-medium text-[#000] hover:text-gray-700"
                >
                  {item}
                </a>
                {(item === "Products" || item === "Services") && (
                  <Image src={downArrow} alt="down arrow" width={14} height={14} priority/>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex flex-shrink-0 ml-6">
          <button className="flex items-center space-x-2 bg-[#003462] text-white px-6 py-2 max-[1150px]:px-4 max-[1150px]:py-1 max-[1150px]:text-[14px] text-[16px] font-medium hover:bg-[#002a4d] transition rounded-[500px]">
            <span>Contact Us</span>
            <Image src={arrowUpRight} alt="arrow up right" width={18} height={18} priority />
          </button>
        </div>

        <div className="md:hidden max-[800px]:block">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 px-6">
          <ul className="flex flex-col space-y-4 text-[16px] font-medium text-[#000]">
            {["Home", "About", "Products", "Services", "Blogs"].map((item, idx) => (
              <li key={idx} className={idx > 1 ? "flex items-center space-x-1" : ""}>
                <a href={item === "Home" ? "/" : item === "About" ? "/aboutus" : "#"}>{item}</a> {/* updated href */}
                {(item === "Products" || item === "Services") && (
                  <Image src={downArrow} alt="down arrow" width={16} height={16} />
                )}
              </li>
            ))}
            <li>
              <button className="w-full flex items-center justify-center space-x-2 bg-[#003462] text-white px-6 py-2 text-[16px] font-medium hover:bg-[#002a4d] transition rounded-[500px]">
                <span>Contact Us</span>
                <Image src={arrowUpRight} alt="arrow up right" width={18} height={18} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

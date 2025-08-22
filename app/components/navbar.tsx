
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import downArrow from "../../public/assets/down-arrow.svg";
import arrowUpRight from "../../public/assets/arrow-up-right.svg";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={300} height={48.14} priority />
      </div>

      <nav>
        <ul className="flex space-x-10">
          <li>
            <a
              href="#"
              className="text-[24px] font-normal text-[#000000] hover:text-gray-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[24px] font-normal text-[#000000] hover:text-gray-900"
            >
              About
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <a
              href="#"
              className="text-[24px] font-normal text-[#000000] hover:text-gray-900"
            >
              Products
            </a>
            <Image src={downArrow} alt="down arrow" width={24} height={24}  priority />
          </li>
          <li className="flex items-center space-x-2">
            <a
              href="#"
              className="text-[24px] font-normal text-[#000000] hover:text-gray-900"
            >
              Services
            </a>
            <Image src={downArrow} alt="down arrow" width={24} height={24}  priority/>
          </li>
          <li>
            <a
              href="#"
              className="text-[24px] font-normal text-[#000000] hover:text-gray-900"
            >
              Blogs
            </a>
          </li>
        </ul>
      </nav>

     
      <button className="flex items-center space-x-3 bg-[#003462] text-white px-6 py-3 hover:bg-[#002a4d] transition rounded-[500px]">
        <span className="text-[24px] font-normal">Contact Us</span>
        <Image src={arrowUpRight} alt="arrow up right" width={20} height={20}  priority/>
      </button>
    </div>
  );
}

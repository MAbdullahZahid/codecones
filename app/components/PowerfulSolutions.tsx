import Image from 'next/image';
import arrowUpRight from "../../public/assets/arrow-up-right.svg";

export default function PowerfulSolutions() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
    
      <div className="text-3xl text-center sm:text-4xl sm:font-medium md:text-[35px] md:font-bold lg:text-[42px] leading-[1.1] font-bold max-w-screen-lg">
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
    </div>
  );
}

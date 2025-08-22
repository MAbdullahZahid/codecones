import Image from "next/image";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import arrowUpRight from "../public/assets/arrow-up-right.svg";
import people1 from '../public/assets/people1.svg';
import people2 from '../public/assets/people2.svg';
import people3 from '../public/assets/people3.svg';
import googleReviews from '../public/assets/googleReview.svg';
import AnimatedText from "./components/AnimatedText";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />

      <section className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
        
          {/* Left content - heading with animated text */}
          <div className="max-w-3xl w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl sm:font-medium md:text-[42px] md:font-bold lg:text-[50px] leading-[1.1] text-[#1C1C1C] font-bold">
              Global UX/UI design agency digital partner for
              <span className="text-[#FFC94D] text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-bold block mt-2 min-h-[60px] sm:min-h-[65px] md:min-h-[72px] lg:min-h-[80px]">
                <AnimatedText />
              </span>
            </h1>
          </div>

          {/* Right content - description and reviews */}
          <div className="max-w-md w-full text-base md:text-[18px] font-medium text-[#1C1C1C] flex flex-col justify-center">
            <p className="text-center lg:text-left">
              We deliver globally UI, UX & web design smoothly, without delay,
              saving your time and money with an efficient process.
            </p>

            <div className="flex flex-row xs:flex-row items-center justify-between mt-6 gap-4">
              {/* Loved by founders */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  <Image
                    src={people1}
                    alt="Founder 1"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src={people2}
                    alt="Founder 2"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src={people3}
                    alt="Founder 3"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-xs font-medium">Loved by 50+ Founders</p>
              </div>

             
              <div className="mt-3 xs:mt-0">
                <Image
                  src={googleReviews}
                  alt="Google Reviews"
                  width={150}
                  height={50}
                  className="w-[110px] xs:w-[120px] sm:w-[130px] md:w-[140px] lg:w-[150px]"
                />
              </div>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col sm:flex-row mt-8 md:mt-12 gap-4 md:gap-6 justify-center lg:justify-start">
          <button className="flex items-center justify-center space-x-2 bg-black text-white text-sm md:text-[16px] font-medium px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-800 transition">
            <span>Book a Strategy Call</span>
            <Image src={arrowUpRight} alt="Arrow" width={18} height={18} className="w-4 h-4 md:w-[18px] md:h-[18px]" />
          </button>

          <button className="text-sm md:text-[16px] font-medium px-6 py-3 md:px-8 md:py-4 rounded-full border border-black hover:bg-gray-100 transition">
            Get a Custom Quote
          </button>
        </div>
      </section>
    </>
  );
}
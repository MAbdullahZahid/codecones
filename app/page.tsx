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

      {/* <section className="flex flex-col px-20 py-16">
       
       
<div className="flex flex-row justify-between items-center">

  <div className="max-w-3xl">
    <h1 className="text-[88px] leading-[1.1] text-[#1C1C1C] font-semibold">
      Global UX/UI design agency digital partner for
      <span className="text-[#FFC94D] font-bold">
       <AnimatedText />
      </span>
    </h1>
  </div>


  <div className="max-w-md text-[18px] font-medium text-[#1C1C1C] flex flex-col justify-center">
    <p>
      We deliver globally UI, UX & web design smoothly, without delay,
      saving your time and money with an efficient process.
    </p>

    <div className="flex items-center justify-between mt-6">
     
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
        <p className="text-[12px] font-medium ">Loved by 50+ Founders</p>
      </div>

    
      <div>
        <Image
          src={googleReviews}
          alt="Google Reviews"
          width={150}
          height={50}
        />
      </div>
    </div>
  </div>
</div>

       
        <div className="flex flex-row mt-12 space-x-6">
          <button className="flex items-center space-x-2 bg-black text-white text-[20px] font-medium px-8 py-4 rounded-full hover:bg-gray-800 transition">
            <span>Book a Strategy Call</span>
            <Image src={arrowUpRight} alt="Arrow" width={18} height={18} />
          </button>

          <button className="text-[20px] font-medium px-8 py-4 rounded-full border border-black hover:bg-gray-100 transition">
            Get a Custom Quote
          </button>
        </div>
      </section> */}
    </>
  );
}

const FastDelivery = () => {
  return (
    <div className="bg-[#1C1C1C] mt-3 py-8 px-4 md:px-8 lg:px-16 xl:px-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        <span className="text-[#FFFFFF]">We deliver reliab</span>
        <span className="text-[#828282]">le software fast — in days</span>{" "}
        <span className="text-[#DFDFDF]">and we</span>
        <span className="text-[#A7A7A7]">ek, not months.</span>
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Left Section (Steps) */}
        <div className="bg-[#3F3F3F] flex flex-col rounded-2xl md:rounded-3xl p-6 md:p-8 w-full lg:w-1/2">
          <ul className="text-white space-y-4 md:space-y-6">
            <li className="flex items-center border-b border-[#6A6A6A] pb-4">
              <span className="text-lg md:text-xl mr-3 md:mr-4">01</span>
              Onboard in &lt;1 day
              <div className="flex-grow"></div>
              <img src="/assets/arrow-up-right.svg" alt="Arrow" className="w-4 h-4 md:w-5 md:h-5" />
            </li>

            <li className="flex items-center border-b border-[#6A6A6A] pb-4">
              <span className="text-lg md:text-xl mr-3 md:mr-4">02</span>
              Understand Scope & Needs
              <div className="flex-grow"></div>
              <img src="/assets/arrow-up-right.svg" alt="Arrow" className="w-4 h-4 md:w-5 md:h-5" />
            </li>

            <li className="flex items-center border-b border-[#6A6A6A] pb-4">
              <span className="text-lg md:text-xl mr-3 md:mr-4">03</span>
              First Delivery in 4-5 Days
              <div className="flex-grow"></div>
              <img src="/assets/arrow-up-right.svg" alt="Arrow" className="w-4 h-4 md:w-5 md:h-5" />
            </li>
          </ul>
        </div>

        {/* Right Section (Testimonial) */}
        <div className="flex flex-col w-full lg:w-1/2 p-4 md:p-6">
          <p className="text-[#FFFFFF] mb-4 md:mb-6 text-base md:text-lg">
            “CodeCones is a fantastic development team, with the perfect blend of technical expertise and creative thinking. Highly recommended.”
          </p>

          <div className="flex flex-row items-center mb-4 md:mb-6">
            <img src="/assets/quote.svg" alt="Quote" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="text-[#FFFFFF] text-sm md:text-base">Hassan Ali</span>
          </div>

          <p className="text-[#A7A7A7] mb-6 text-sm md:text-base">
            CTO & Founder @ Omningage
          </p>

          <button className="bg-[#FBAD18] text-[#1C1C1C] w-full md:w-[250px] py-3 rounded-full font-bold hover:bg-[#FFA500] transition flex items-center justify-center">
            Book a call <img src="/assets/uprightarrowblack.svg" alt="Arrow" className="inline w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
     
      <div className="p-6 md:p-8 text-center mt-8 md:mt-10 rounded-3xl md:rounded-[48px] mb-5" style={{ background: 'radial-gradient(circle at top right,  #003462 10% ,#252525 ,#FBAD18)' }}>
        <p className="text-[#FFFFFF] text-2xl md:text-3xl lg:text-4xl font-bold mb-6">We deliver reliable software fast in days and weeks</p>
        <button className="bg-[#FBAD18] text-[#1C1C1C] w-full md:w-[250px] py-3 rounded-full font-bold hover:bg-[#FFA500] transition flex items-center justify-center mx-auto">
          Book a call <img src="/assets/uprightarrowblack.svg" alt="Arrow" className="inline w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FastDelivery;
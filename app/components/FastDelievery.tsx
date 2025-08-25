const FastDelivery = () => {
  return (
    <div className="bg-[#1C1C1C] mt-3 py-8 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        <span className="text-[#FFFFFF]">We deliver reliab</span>
        <span className="text-[#828282]">le software fast — in days</span>{" "}
        <span className="text-[#DFDFDF]">and we</span>
        <span className="text-[#A7A7A7]">ek, not months.</span>
      </h1>

      <div className="flex flex-row space-x-8">
        {/* Left Section (Steps) */}
        <div className="bg-[#3F3F3F] flex flex-col rounded-[32px] fit-content p-8 w-1/2">
          <ul className="text-white space-y-4">
            <li className="flex items-center border-b border-[#6A6A6A] pb-4">
              <span className="text-1xl mr-4">01</span>
              Onboard in &lt;1 day
              <div className="flex-grow"></div>
              <img src="/assets/arrow-up-right.svg" alt="Arrow" className="w-4 h-4" />
            </li>

            <li className="flex items-center border-b border-[#6A6A6A] pb-4">
              <span className="text-1xl mr-4">02</span>
              Understand Scope & Needs
              <div className="flex-grow"></div>
              <img src="/assets/arrow-up-right.svg" alt="Arrow" className="w-4 h-4" />
            </li>

            <li className="flex items-center border-b border-[#6A6A6A] pb-4">
              <span className="text-1xl mr-4">03</span>
              First Delivery in 4-5 Days
              <div className="flex-grow"></div>
              <img src="/assets/arrow-up-right.svg" alt="Arrow" className="w-4 h-4" />
            </li>
          </ul>
        </div>

        {/* Right Section (Testimonial) */}
        <div className="flex flex-col w-1/2">
          <p className="text-[#FFFFFF] mb-4">
            “CodeCones is a fantastic development team, with the perfect blend of technical expertise and creative thinking. Highly recommended.”
          </p>

          <div className="flex flex-row items-center mb-6">
            <img src="/assets/quote.svg" alt="Quote" className="w-6 h-6 mr-2" />
            <span className="text-[#FFFFFF]">Hassan Ali</span>
          </div>

          <p className="text-[#A7A7A7] mb-6">
            CTO & Founder @ Omningage
          </p>

          <button className="bg-[#FBAD18] text-[#1C1C1C] w-[250] py-3 rounded-full font-bold hover:bg-[#FFA500] transition">
            Book a call <img src="/assets/uprightarrowblack.svg" alt="Arrow" className="inline w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastDelivery;

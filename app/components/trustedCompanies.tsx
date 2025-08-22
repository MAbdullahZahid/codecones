'use client';  // Add this directive to mark the component as client-side

import { useEffect } from 'react';
import company1 from "../../public/assets/Logo box (2).svg";
import company2 from "../../public/assets/Logo box (3).svg";
import company3 from "../../public/assets/Logo box (4).svg";
import company4 from "../../public/assets/comp1.svg";
import company5 from "../../public/assets/logoipsum-242.svg";
import company6 from "../../public/assets/logoipsum-265.svg";
import company7 from "../../public/assets/Logo box.svg";

// Import GSAP
import gsap from 'gsap';

export default function TrustedCompanies() {
  const companies = [company1, company2, company3, company4, company5, company6, company7];

  useEffect(() => {
    const slider = document.getElementById('slider');
    console.log('Slider Element:', slider);  // Debugging if the element is found

    if (slider) {
      const totalWidth = slider.scrollWidth / 2;  // Half because we duplicated the array
      console.log('Total Width:', totalWidth);  // Debugging the scrollWidth

      if (totalWidth > 0) {
        gsap.to(slider, {
          x: -totalWidth,
          duration: 20,
          ease: 'linear',
          repeat: -1
        });
      } else {
        console.log('Scroll width is zero or not calculated correctly.');
      }
    } else {
      console.log('Slider element not found.');
    }
  }, []);  

  return (
    <div className="overflow-hidden py-8 relative">
      <div className="text-[36px] font-medium text-center mb-8">
        Trusted by 500+ global companies
      </div>

      <div className="relative w-full overflow-hidden">
        <div id="slider" className="flex gap-8 whitespace-nowrap">
          {[...companies, ...companies].map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`Company ${idx + 1}`}
              className="inline-block w-[171px] md:w-[150px] sm:w-[120px]"  // Adjust width for responsiveness
              height={32}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

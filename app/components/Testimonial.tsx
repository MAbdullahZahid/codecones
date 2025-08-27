"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const additionalContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ===== Testimonials Auto-scroll =====
    const setupAnimation = (container: HTMLDivElement | null) => {
      if (!container) return;

      let animationId: number;
      const scrollSpeed = 1.5;

      const animate = () => {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    };

    const cleanup1 = setupAnimation(containerRef.current);
    const cleanup2 = setupAnimation(additionalContainerRef.current);

    // ===== Heading Animation =====
    const heading = document.querySelector(".testimonials-heading");
    if (heading) {
      const splits: SplitType[] = [];
      heading.querySelectorAll(".split-anim").forEach((el) => {
        splits.push(new SplitType(el as HTMLElement, { types: "chars" }));
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          end: "+=100%",
          scrub: 0.5,
          markers: false,
        },
      });

      splits.forEach((split) => {
        tl.to(split.chars, { color: "#1C1C1C", stagger: 0.05, duration: 1 });
      });
    }

    // ===== Cleanup =====
    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="py-12 px-4 overflow-hidden bg-white">
      {/* Animated Heading */}
      <h1 className="testimonials-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center max-w-4xl mx-auto leading-tight">
        <span className="text-[#1C1C1C] split-anim">Bring your best i</span>
        <span className="text-[#828282] split-anim">deas to life with Codecones.</span>{" "}
        <span className="text-[#A7A7A7] split-anim">Your ne</span>
        <span className="text-[#DFDFDF] split-anim">xt success is just one design away.</span>
      </h1>

      {/* First set of testimonials */}
      <div ref={containerRef} className="flex overflow-x-hidden py-4 mb-12">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[600px] mx-4 bg-[#F9F9F9] shadow-md rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start"
          >
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-start mb-4 md:mb-0 md:mr-6">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full flex items-center justify-center">
                <img
                  src="./assets/testimonalspic.svg"
                  alt="Profile"
                  className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-full"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <p className="text-gray-700 mb-4 italic">
                &quot;As a dad, Nuvra has been incredible for my family. They&apos;re always there when we need them.&quot;
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-8">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-[black] text-lg md:text-xl">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <span className="font-semibold text-black">Samantha</span>
                  <span className="hidden md:block mx-1">-</span>
                  <span className="text-sm text-gray-600">CEO @ ResolveCX</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional cards section */}
      <div ref={additionalContainerRef} className="flex overflow-x-hidden py-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[600px] mx-4 bg-[#F9F9F9] shadow-md rounded-xl p-6"
          >
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <p className="text-gray-700 mb-4 italic">
                &quot;As a dad, Nuvra has been incredible for my family. They&apos;re always there when we need them.&quot;
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-8">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-[black] text-lg md:text-xl">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">5.0</span>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                  <span className="font-semibold text-black">Samantha</span>
                  <span className="hidden md:block mx-1">-</span>
                  <span className="text-sm text-gray-600">CEO @ ResolveCX</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

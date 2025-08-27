"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import checkCircleIcon from "../../public/assets/check-circle 1.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDiscussion() {
  useEffect(() => {
    const container = document.querySelector(".project-discussion-anim");
    if (!container) return;

    const splits: SplitType[] = [];
    container.querySelectorAll(".split-anim").forEach((el) => {
      splits.push(new SplitType(el as HTMLElement, { types: "chars" }));
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 110%",
        end: "+=150%",
        scrub: 0.5,
        markers: false,
      },
    });

    splits.forEach((split) => {
      tl.to(split.chars, {
        color: "#1C1C1C",
        stagger: 0.05,
        duration: 1,
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 project-discussion-anim">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 max-w-xl mb-12 lg:mb-0 lg:pr-12">
        <div className="text-center lg:text-left mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-[#1C1C1C] split-anim">Ha</span>
            <span className="text-[#828282] split-anim">ve a Project?</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-[#A7A7A7] split-anim">Le</span>
            <span className="text-[#DFDFDF] split-anim">t&apos;s talk!</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-500">
            NDA? Absolutely just ask. We&apos;ll respond in 24 hours fast &
            focused. Work with senior experts, not juniors.
          </p>
        </div>

        {/* List of benefits */}
        <div className="space-y-4 mb-8">
          {[
            "NDA? Absolutely just ask.",
            "We'll respond in 24 hours fast & focused.",
            "Work with senior and experts, not juniors.",
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <Image
                src={checkCircleIcon}
                alt="check circle"
                width={20}
                height={20}
                className="mt-1 flex-shrink-0"
              />
              <p className="ml-3 text-base sm:text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>

        {/* Schedule a call section */}
        <div className="mb-8 lg:mb-0">
          <p className="text-gray-700 font-medium mb-4">Schedule a call:</p>
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm max-w-md w-[280px]">
            <Image
              src="/assets/questionPerson.svg"
              alt="Hassan Ali, CTO of CodeCones"
              width={60}
              height={60}
              className="rounded-full object-cover flex-shrink-0"
            />
            <div className="ml-4 flex-grow">
              <p className="font-semibold text-gray-800">Hassan Ali</p>
              <p className="text-sm text-gray-600">CTO & Founder</p>
            </div>
            <Image
              src="/assets/Medium Button with icons.svg"
              alt="Schedule meeting"
              width={40}
              height={40}
              className="object-cover flex-shrink-0"
            />
          </div>
        </div>
      </div>

      {/* Right Content - Form */}
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-md xl:max-w-lg">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <form className="space-y-4">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="mt-4 p-3 border border-gray-300 rounded-md text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <select className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base">
                <option value="">Project Budget</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <select className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base">
                <option value="">How did you hear about us?</option>
                <option value="google">Google</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral</option>
              </select>
            </div>

            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md text-sm sm:text-base"
              rows={4}
            ></textarea>

            <div className="flex gap-2 mb-4 flex-wrap">
              {[
                "Custom Software",
                "Cloud Solution",
                "DevOps",
                "UX/UI Design",
                "Staff Augmentation",
              ].map((service) => (
                <button
                  key={service}
                  type="button"
                  className="px-3 py-1.5 text-xs sm:text-sm rounded-[12px] bg-white border border-gray-300  text-gray-800 hover:bg-gray-300 transition-colors"
                >
                  {service}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                type="submit"
                className="w-[200px] bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full transition-colors text-sm sm:text-base"
              >
                Send Message
              </button>
              <p className="w-full sm:w-[30%] text-center sm:text-right text-xs sm:text-sm text-gray-600">
                Prefer email?{" "}
                <a
                  href="mailto:hello@codecones.com"
                  className="text-blue-600 hover:underline"
                >
                  hello@codecones.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

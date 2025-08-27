"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const HelpStartUp: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      name: "Custom Software",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam aspernatur voluptatibus aut.",
      tags: [
        "Web / Mob Application",
        "Digital Product",
        "Enterprise Software",
        "API Development & Integrations",
        "Cloud-Native Apps",
        "Maintenance & Support",
      ],
      imageUrl: "/assets/serviceimg.png",
    },
    {
      name: "Cloud Solutions",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam aspernatur voluptatibus aut.",
      tags: ["SaaS", "PaaS", "IaaS", "Hybrid Cloud"],
      imageUrl: "/assets/serviceimg.png",
    },
    {
      name: "DevOps",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam aspernatur voluptatibus aut.",
      tags: ["SaaS", "PaaS", "IaaS", "Hybrid Cloud"],
      imageUrl: "/assets/serviceimg.png",
    },
    {
      name: "UX & UI Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam aspernatur voluptatibus aut.",
      tags: ["SaaS", "PaaS", "IaaS", "Hybrid Cloud"],
      imageUrl: "/assets/serviceimg.png",
    },
    {
      name: "Staff Augmentation",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam aspernatur voluptatibus aut.",
      tags: ["SaaS", "PaaS", "IaaS", "Hybrid Cloud"],
      imageUrl: "/assets/serviceimg.png",
    },
  ];

 useEffect(() => {
  const container = document.querySelector(".startup-heading");
  if (!container) return;

  const splits: SplitType[] = [];
  container.querySelectorAll(".split-anim").forEach((el) => {
    splits.push(new SplitType(el as HTMLElement, { types: "chars" }));
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 90%",
      end: "+=100%",
      scrub: 0.5,
      markers: false,
    },
  });

  splits.forEach((split) => {
    tl.to(split.chars, { color: "#1C1C1C", stagger: 0.05, duration: 1 });
  });

  return () => {
    tl.kill();
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, []);


  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Heading Section with animation */}
      <h1 className="startup-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center leading-tight">
        <span className="text-[#1C1C1C] split-anim">We help startups </span>
        <span className="text-[#828282] split-anim">
          and enterprises grow with{" "}
        </span>
        <span className="text-[#A7A7A7] split-anim">fast, </span>
        <span className="text-[#DFDFDF] split-anim">
          creative, and scalable technology.
        </span>
      </h1>

      {/* Service List Section */}
      <ul className="mt-6 space-y-4">
        {services.map((service) => (
          <li
            key={service.name}
            onMouseEnter={() => setActiveService(service.name)}
            onMouseLeave={() => setActiveService(null)}
            onClick={() =>
              setActiveService(
                activeService === service.name ? null : service.name
              )
            }
            className="group cursor-pointer border-b border-[#DFDFDF] pb-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:underline">
                {service.name}
              </h2>
              <span className="md:hidden text-gray-500">
                {activeService === service.name ? "▲" : "▼"}
              </span>
            </div>

            {(activeService === service.name) && (
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-2">
                <div className="md:w-2/5">
                  <p className="text-gray-600 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="md:w-1/3 h-32 rounded-lg overflow-hidden order-first md:order-none">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-[300px] h-full object-cover rounded-[470px] border-2 border-gray-300"
                  />
                </div>

                <div className="md:w-1/3">
                  <div className="flex gap-2 md:gap-3 flex-wrap">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white text-gray-800 text-xs md:text-sm px-3 py-1 md:px-4 md:py-2 rounded-full border border-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpStartUp;

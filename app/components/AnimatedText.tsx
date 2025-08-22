"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const texts = [
  "SaaS Companies",
  "Software Providers",
  "Digital Product",
  "Business Application",
];

export default function AnimatedText() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    texts.forEach((text) => {
      tl.to(el, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          el.innerText = text;
        },
      });
      tl.to(el, { opacity: 1, duration: 0.5 });
      tl.to({}, { duration: 1 }); // pause
    });

    return () => {
      tl.kill();
    };
  }, []);

  return <span className="text-[#FFC94D] font-bold" ref={textRef}>{texts[0]}</span>;
}

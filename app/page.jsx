"use client"

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 
import HomePage from "@/components/HomePage";
import Boxes from "@/components/boxes";
import Sponsors from "@/components/sponsors";
import Mentors from "@/components/mentors";
import Agenda from "@/components/agenda";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        x: 0,
      },
      {
        x: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.scrollTrigger.kill();
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[500vw] flex flex-row relative">
          <HomePage />
          <Boxes />
          <Sponsors />
          <Mentors />
          <Agenda />
        </div>
      </div>
    </main>
  );
}

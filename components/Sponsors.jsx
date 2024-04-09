"use client";
import Image from "next/image";
import Vector from "../public/Vector.png";
import LoadingAnimation from "@/utils/LoadingAnimation";
import logos from "../public/Frame.png";
import mouse from "../public/mouse.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import "../app/globals.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="relative h-screen w-[100%] flex justify-center items-center section max-md:hidden"
    >
      <Link
        className=" right-0 cursor-pointer z-50 items-center justify-center rounded-full bg-black text-white w-8 h-8  box-shadow-button-left -translate-x-7 md:flex hidden"
        href={"#boxes"}
      >
        <FaArrowRightLong className="rotate-180" />

      </Link>
      <div className="w-[90vw] h-[86vh] flex flex-col justify-center items-center back rounded-[40px] relative">
        <Image src={logos} alt="two logo" className="w-[120px]" />
        <h1 className="z-20 text-[#242424] m-[40px] flex gap-[20px] font-clashDisplay font-medium text-center text-[80.024px] leading-[110px] tracking-[0.997px]">
          Coming Soon <LoadingAnimation />
        </h1>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfx7fW0WzsI3B4uEmme6sJGF2kMK59YGzQKs3wgLxkEf58vCw/viewform"
          className="z-[1000] flex w-[304px] h-[54px] justify-center items-center gap-[20px] rounded-[20px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#303030_0%,_#000_100%)] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 max-md:w-[210px] max-md:rounded-[14px]"
        >
          <span className="text-center text-[17px] font-clashDisplay font-normal leading-[normal] capitalize text-[#F5F5F5] max-md:text-[16px]">
            Register Now
          </span>
          <motion.div
            className="max-md:hidden"
            initial={{ transform: "translateX(0) rotate(90deg)" }}
            animate={{
              transform: [
                "translateX(0) rotate(90deg)",
                "translateX(20px) rotate(90deg)",
                "translateX(0) rotate(90deg)",
              ],
              transition: { duration: 2, repeat: Infinity },
            }}
          >
            <Image src={mouse} className="max-md:hidden" />
          </motion.div>
        </Link>
        <Image
          src={Vector}
          alt="Vector"
          className="absolute w-[100vw] top-[60px] z-10"
        />
      </div>
      <Link
        className=" right-0 cursor-pointer z-50 items-center justify-center rounded-full bg-black text-white w-8 h-8  box-shadow-button translate-x-7 md:flex hidden"
        href={"#mentors"}
      >
        <FaArrowRightLong className="" />

      </Link>
    </section>
  );
};

export default Sponsors;

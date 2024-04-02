"use client"

import Image from "next/image";
import logos from "../public/Frame.png";
import mouse from "../public/mouse.svg";
import Vector from "../public/Vector.png";
import TypeWriter from "../utils/TypeWriter";
import CustomCursor from "../utils/CustomCursor";
import "../app/globals.css";


const HomePage = () => {
  return (
    <section className="h-screen w-[100%] flex justify-center items-center section">
      <div className="w-[90vw] h-[86vh] flex flex-col justify-center items-center back rounded-[40px] relative">
        <Image src={logos} alt="two logo" className="w-[100px]" />
        <div>
          <h1 className="text-[#242424] mt-[30px] font-clashDisplay font-medium text-center text-[80.024px] leading-[110px] tracking-[0.997px]">
            <span className="pr-[200px]">
              where we
              <span className="text-[#FFF] not-italic z-[11111] px-[30px] relative ml-[20px] leading-[57.419px] tracking-[1.14px] rounded-[797.488px] bg-[linear-gradient(259deg,_#9E95FF_3.48%,_#DAB5FF_67.29%)] font-semibold">
                <TypeWriter text={"Ideate"} />
              </span>
            </span>
            <br />
            <span className="pl-[230px]">
              and
              <span className="text-[#FFF] px-[30px] not-italic z-[11111] relative ml-[20px] leading-[57.419px] tracking-[1.14px] rounded-[797.488px] bg-[linear-gradient(259deg,_#9E95FF_3.48%,_#DAB5FF_67.29%)] font-semibold">
                <TypeWriter text={"technicate"} />
              </span>
            </span>
            <br />
            <span className="text-center relative z-[5]">together</span>
          </h1>
        </div>
        <p className="z-[99999] text-[#4D4D4D] font-inter text-center text-[13px] font-medium leading-[27px] mt-[28px] mb-[20px]">
          Let&apos;s break it down for you in the most simple and <br />{" "}
          straightforward way possible!
        </p>
        <a
          href="#boxes"
          className="cursor-pointer z-[1000] flex w-[504px] h-[54px] justify-center items-center gap-[40px] rounded-[20px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#303030_0%,_#000_100%)]"
        >
          <span className="text-center text-[16px] font-clashDisplay font-normal leading-[normal] capitalize text-[#F5F5F5]">
            scroll to see more
          </span>
          <Image src={mouse} className="rotate-[90deg]" />
        </a>
        <Image
          src={Vector}
          alt="Vector"
          className="absolute w-[100vw] top-[60px] z-10"
        />
        <CustomCursor name={'Rayane'} classDiv={'absolute right-[280px] top-[70px] z-[50] pl-[50px]'} classCursor={'w-[30px] rotate-[deg]'} classForName={'rounded-[6px] py-[4px] px-[10px] bg-[#282828] [box-shadow:0px_1px_4px_0px_rgba(0,_0,_0,_0.25),_0px_-1px_9px_0px_rgba(103,_103,_103,_0.25)] text-[#FFF] font-clashDisplay text-[12px] font-semibold'} />
        <CustomCursor name={'Iyad'} classDiv={'absolute right-[200px] bottom-[40%] z-[50]'} classCursor={'w-[30px]'} classForName={'rounded-[6px] py-[4px] px-[10px] bg-[#282828] [box-shadow:0px_1px_4px_0px_rgba(0,_0,_0,_0.25),_0px_-1px_9px_0px_rgba(103,_103,_103,_0.25)] text-[#FFF] font-clashDisplay text-[12px] font-semibold'}  />
        <CustomCursor name={'Said'} classDiv={'absolute left-[240px] bottom-[44%] z-[50]'} classCursor={'w-[30px] rotate-[75deg]'} classForName={'rounded-[6px] py-[4px] px-[10px] bg-[#282828] [box-shadow:0px_1px_4px_0px_rgba(0,_0,_0,_0.25),_0px_-1px_9px_0px_rgba(103,_103,_103,_0.25)] text-[#FFF] font-clashDisplay text-[12px] font-semibold'}  />
      </div>
    </section>
  );
};

export default HomePage;

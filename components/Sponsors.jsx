import Image from "next/image";
import Vector from "../public/Vector.png";
import LoadingAnimation from "@/utils/LoadingAnimation";
import Link from "next/link";
// import { IoIosArrowDropleftCircle } from "react-icons/io";
import "../app/globals.css";

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="relative h-screen w-[100%] flex justify-center items-center section max-md:hidden"
    >
      {/* <Link
        href="#mentors"
        className="absolute top-[50%] translate-y-[-50%] left-4 z-50 text-[40px]"
      >
        <IoIosArrowDropleftCircle className=" !text-[#red]" />
      </Link> */}
      <div className="w-[90vw] h-[86vh] flex flex-col justify-center items-center back rounded-[40px] relative">
        <h1 className="z-20 text-[#242424] mt-[30px] flex gap-[20px] font-clashDisplay font-medium text-center text-[80.024px] leading-[110px] tracking-[0.997px]">
          Coming Soon <LoadingAnimation />
        </h1>
        <Image
          src={Vector}
          alt="Vector"
          className="absolute w-[100vw] top-[60px] z-10"
        />
      </div>
      {/* <Link href="#agenda"></Link> */}
    </section>
  );
};

export default Sponsors;

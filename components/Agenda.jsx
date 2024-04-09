import Image from "next/image";
import Vector from "../public/Vector.png";
import LoadingAnimation from "@/utils/LoadingAnimation";
import Link from "next/link";
import "../app/globals.css";

const Agenda = () => {
  return (
    <section
      id="agenda"
      className="relative h-screen w-[100%] flex justify-center items-center section max-md:hidden"
    >
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
    </section>
  );
};

export default Agenda;

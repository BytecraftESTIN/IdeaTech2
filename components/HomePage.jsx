import Image from "next/image";
import logos from "../public/Frame.png";
import mouse from "../public/mouse.svg";
import Vector from "../public/Vector.png";

const Home = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[90vw] h-[80vh] flex flex-col justify-center items-center back rounded-[40px] relative">
        <Image src={logos} alt="two logo" className="mb-[40px] w-[120px]" />
        <div className="z-[10000]">
          <h1 className="text-[#242424] font-clashDisplay font-medium text-center text-[114.024px] leading-[156.419px] tracking-[0.997px]">
            <span className="pr-[220px]">
              where we
              <span className="text-[#FFF] not-italic px-[60px] ml-[30px] leading-[57.419px] tracking-[1.14px] rounded-[797.488px] bg-[linear-gradient(259deg,_#9E95FF_3.48%,_#DAB5FF_67.29%)] font-semibold">
                Ideate
              </span>
            </span>
            <br />
            <span className="pl-[390px]">
              and
              <span className="text-[#FFF] px-[60px] not-italic ml-[30px] leading-[57.419px] tracking-[1.14px] rounded-[797.488px] bg-[linear-gradient(259deg,_#9E95FF_3.48%,_#DAB5FF_67.29%)] font-semibold">
                technicate
              </span>
            </span>
            <br />
            <span className="text-center pl-[40px]">together</span>
          </h1>
        </div>
        <p className="z-[99999] text-[#4D4D4D] font-inter text-center text-[18px] font-semibold leading-[27px] mt-[60px] mb-[32px]">
          Let&apos;s break it down for you in the most simple and <br />{" "}
          straightforward way possible!
        </p>
        <a
          href="#boxes"
          className="cursor-pointer z-[1000] flex w-[504px] h-[72px] px-[80px] py-[16px] justify-center items-center gap-[24px] rounded-[20px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,_#303030_0%,_#000_100%)]"
        >
          <span className="text-center text-[20px] font-clashDisplay font-normal leading-[normal] capitalize text-[#F5F5F5]">
            scroll to see more
          </span>
          <Image src={mouse} />
        </a>
        <Image
          src={Vector}
          alt="Vector"
          className="absolute w-[100vw] top-[90px]"
        />
      </div>
    </section>
  )
}

export default Home
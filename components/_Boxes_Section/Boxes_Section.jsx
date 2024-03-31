import React from 'react'
import logos from "../../public/Frame.png";
import Ideatech from "../../public/Ideatech Logo SVG 3.png"
import CustomeUI from "../../public/div.customization-ui.png";
import Vector from "../../public/Vector.png";
import '../../app/globals.css'
import Image from 'next/image';

const Boxes_Section = () => {
  return (
    <section id='boxes' className="h-screen w-[100%] flex justify-center items-center section">
        <div className="w-[90vw] h-[86vh] flex flex-col justify-center items-center back rounded-[40px] relative boxes">
          <Image src={logos}  alt="two logo" className="w-[100px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" />
          <Image
            src={Vector}
            alt="Vector"
            className="absolute w-[100vw] top-[40px]"
          />
          <article className=' h-full w-full z-50 rounded-[32px] px-[26px] py-[16px] bg-[#F682A5] box1'>
            mùm
            qdqsdqsdqsdqsd
            qdqsdqsdqsdqsddqs
            dqsd
            qdqsdqsdqsdqsddqsd
            qs
          </article>
          <article className=' h-full w-full z-50 rounded-[32px] px-[26px] py-[16px]  bg-[#C9DA8F] box2'>
            qsdq
            sdfdsfdsfsdfdsfsdfsdfsdfsd
            qdqsdqs
          </article>
          <article className=' h-full w-full  z-50 rounded-[32px] px-[26px] py-[16px]  bg-[#FEDF6F] box3'>
            qdq
            qdqs
          </article>
          <article className=' h-full flex flex-col gap-[5px] w-full py-[16px] z-50 rounded-[32px]  bg-[#B8CEDC] box4'>
            <h1 className='px-[26px] text-[22px] whitespace-nowrap text-[#52225E] font-clashDisplay font-semibold'>
              About IdeaTech
            </h1>
            <Image
              src={Ideatech}
              alt="ideatech"
              className="w-[267px] px-[26px]"
              />
              <Image
              src={CustomeUI}
              alt="Custom UI"
              className=" w-full -translate-x-5 h-[81px] "
              />
              <span className='px-[26px] text-[#52225ECC] text-[14px] font-inter font-medium'>
                ideatech is the best 
                ideathon in the world
              </span>
          </article>
          <article className=' h-full w-full  z-50 rounded-[32px] px-[26px] py-[16px]  bg-[#F9A474] box5'>
            qd
            qdqsdsqdq
          </article>
          <article className=' h-full w-full z-50 rounded-[32px] px-[26px] py-[16px]  bg-[#B8CEDC] box6'>
            qdqsdq
            qdsqs
          </article>
      </div>
    </section>
  )
}

export default Boxes_Section
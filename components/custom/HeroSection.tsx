import React from 'react'
import styles from "@/components/custom/custom.module.css";
import Image from "next/image";
import Bggraphic from "@/components/custom/GraphicsResourceIcon"


function Hero() {
  return (
    <div className='p-5 sm:p-10'>
      <div className="container mx-auto p-2 sm:p-0 lg:p-5 pb-0 sm:pb-0 lg:pb-0 font-serif">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative ">
           <div className="absolute top-0 right-0 sm:left-1/2 sm:-translate-x-1/2 sm:right-auto">
                        <Bggraphic />

                    </div>

          <div className="lg:text-left content-center ">

           

            <h2 className="text-xl sm:text-4xl md:text-3xl lg:text-1xl text-[#2B2A29] font-serif font-700">Experience the Freedom of</h2>
            <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-8xl text-[#3E4695] font-black font-serif pt-1">₹0 Brokerage</h1>

            <div className="flex lg:justify-start">
              <span className="">
                <Image
                  src="/brokerage-vector.svg"
                  alt="Hero Image"
                  width={230}
                  height={230}
                  className="w-[300px] sm:w-[448px] lg:w-[500px]"
                />
              </span>
            </div>

            <p className="md:text-2xl  text-sm text-[#2B2A29] font-100 font-serif pt-2">
              Start Trading with Zero Brokerage<br /> powered by SEBI Registered Research
            </p>


            <div className="w-full max-w-xl pt-10">

              <div className="flex items-center bg-white overflow-hidden w-full">
                <div className="bg-[#F1F1F1] py-3 px-3 sm:px-3 sm:py-3 border-r text-gray-700 sm:text-lg border rounded-lg border-[#C2C2C2] rounded-r-none border-r-0 bg-[#C2C2C2]">
                  +91
                </div>

                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  className="flex-1 px-3 py-3 text-base w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 sm:text-lg focus:outline-none border border-[#C2C2C2]"
                />

                <button
                  className="bg-[#3E4695] text-white font-semibold px-3 py-3 sm:px-3 sm:py-3 text-base sm:text-lg hover:bg-[#2d3375]
                  whitespace-nowrap border rounded-lg rounded-lg border-black rounded-l-none border-l-0"
                >Start Now!</button>
              </div>

            </div>

          </div>

          <div className="flex justify-center lg:justify-center ">
            
            <Image
              src="/hero-img.png"
              width={681}
              height={664}
              alt=""
              unoptimized
              className="w-[680px] max-lg:w-[520px] max-md:w-[380px] max-sm:w-[300px] h-auto mx-auto"
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Hero

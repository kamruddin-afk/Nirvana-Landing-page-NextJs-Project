import React from 'react'
import Experticon from "@/components/custom/experticon";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Heropng from "@/components/custom/heropng";
import styles from "@/components/custom/custom.module.css";
import Image from "next/image";
function Hero() {
  return (
    <div>
         <div className="container mx-auto p-2 sm:p-0 pb-0">
      
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
                  {/* LEFT CONTENT */}
                  <div className="lg:text-left content-center">
      
                    <h2 className={`${styles.heroSectionContentH2}`}>Experience the Freedom of</h2>
                    <h1 className={`${styles.heroSectionContentH1}`}>₹0 Brokerage</h1>
      
                    {/* icon row */}
                    <div className="flex lg:justify-start">
                      <span className=""><Experticon /></span>
                    </div>
      
                    <p className={`${styles.heroSectionContentP} max-w-md lg:max-w-none lg:mx-0`}>
                     Start Trading with Zero Brokerage powered by SEBI Registered Research
                    </p>
      
      
                    <div className="w-full max-w-xl pt-10">
      
                      <div className="flex items-center bg-white overflow-hidden w-full">
                        <div className="py-3 px-3 sm:px-3 sm:py-3 border-r text-gray-700 sm:text-lg border rounded-sm rounded-lg border-black rounded-r-none border-r-0 bg-[#F0F3F8]">
                          +91
                        </div>
      
                        <input
                          type="text"
                          placeholder="Enter Mobile Number"
                          className="flex-1 px-3 py-3 text-base w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 sm:text-lg focus:outline-none border border-black"
                        />
      
                        <button
                          className="bg-[#3E4695] text-white font-semibold px-3 py-3 sm:px-3 sm:py-3 text-base sm:text-lg hover:bg-[#2d3375]
                  whitespace-nowrap border rounded-sm rounded-lg border-black rounded-l-none border-l-0"
                        >Start Now!</button>
                      </div>
      
                    </div>
      
                  </div>
      
                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center lg:justify-center">
                    <Heropng />
                  </div>
      
                </div>
      
              </div>
    </div>
  )
}

export default Hero

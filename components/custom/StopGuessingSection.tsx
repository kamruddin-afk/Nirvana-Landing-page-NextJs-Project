"use client";
import React from 'react'
import Image from "next/image";
import Bggraphic from "@/components/custom/GraphicsResourceIcon"
import styles from "@/components/custom/custom.module.css";

type CardItem = {
  icon: string;
  title: string;
}

const cards = [
  { icon: "/sector-icon.svg", title: "Research-Backed Trades" },
  { icon: "/api.svg", title: "Free Algo Trading APIs" },
  { icon: "/research-icon.svg", title: "Upto 4x MTF" },
  { icon: "/charting-icon.svg", title: "Advanced Trading Tools" },
];
function StopGuessing() {
  
  return (
    <div>
       <div className="bg-slate-50 relative p-5 sm:p-10 font-serif">
          <div className="absolute top-10 left-0 w-[50px] sm:w-[200px] md:w-[350px] lg:w-[500px]">
            <Bggraphic />

          </div>

          <div className="container mx-auto pt-5 pb-5">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

              {/* Left Content */}
              <div className="StopGuessingContant text-center lg:text-left">
                <h3 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl pb-2 ${styles.StopGuessingContantH3}`}>
                  Stop Guessing. Start Trading.
                </h3>
                <p className={`text-1xl sm:text-2xl md:text-2xl lg:text-2xl ${styles.StopGuessingContantP} mt-4`}>
                with SMC you will access to SEBI-registered expert calls, advanced analysis tools, and transparent pricing - empowering you to make informed trading decisions every day
                </p>
              </div>

              {/* Right Benefits */}
              <div className="w-full">
                  <div className="w-full px-0 sm:px-4 space-y-4">
                        {cards.map((card, index) => (
                          <div
                            key={index}
                            className="
                              flex items-center gap-4
                              bg-white 
                              border border-gray-200 
                              shadow-md 
                              rounded-xl 
                              p-5 sm:p-6
                            "
                          >
                            {/* SVG render with img (best for SVG) */}
                            <img
                              src={card.icon}
                              alt={card.title}
                              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]"
                            />

                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                              {card.title}
                            </h3>
                          </div>
                        ))}
                      </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default StopGuessing

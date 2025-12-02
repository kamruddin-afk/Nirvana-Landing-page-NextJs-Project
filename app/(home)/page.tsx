"use client";
import React from "react";
import Heropng from "@/components/custom/heropng";
import styles from "@/components/custom/custom.module.css";
import Experticon from "@/components/custom/experticon";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Bggraphic from "@/components/custom/bggraphic"
import Pricingman from "@/components/custom/pricingMan";
import Tab from "@/components/custom/tab"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import ResearchSection from '@/components/custom/ResearchSection'
import Howitwork from "@/components/custom/HowItWork";
import Testimonials from '@/components/custom/testimonials'
import Image from "next/image";
import AwardSlider from "@/components/custom/AwardSlider";
import FaqAccordion from "@/components/custom/FaqAccordion";


export default function Home() {


  const imgs: string[] = [
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png",
    "/Award-Symbol.png"

  ];

  const faqData = [
    {
      question: "What is the SMC Nirvana Plan?",
      answer: "A research-led brokerage plan with ₹0 account opening, ₹0 AMC (1st year), low brokerage, and free Algo Trading APIs."
    },

    { question: "Who can apply?", answer: "All major trading segments are included — Equity Delivery, Intraday, Futures, and Options — with the same flat ₹5/order pricing." },

    { question: "Is it truly ₹0 Brokerage?", answer: "Compared to normal brokerage rates (~₹20/order), you can save up to 72% annually Example: With 5 trades/day for 250 days, the annual cost drops from ₹25,000 to ₹6,949, saving ₹18,051 in brokerage." },
    { question: "What are the changes after 30 days?", answer: "Yes, but it is especially beneficial for active traders such as intraday, options, scalpers, and high-volume traders who want low-cost, high-efficiency trading." },

    { question: "Is research included?", answer: "Yes. The plan includes advanced F&O tools, SEBI-registered research, real-time insights, and fast, modern trading platforms powered by SMC Global." },

    { question: "How long is the offer valid?", answer: "Yes. Regulatory charges such as SEBI fees, Exchange fees, STT, Stamp Duty, and GST are applicable as per government rules. The ₹699 is only the annual subscription for the Alpha Trader Plan." },

    { question: "How do I get started with the Alpha Trader Plan?", answer: "Getting started is simple — just enter your mobile number on the landing page, complete the basic verification, and open your Ujjivan Bank-SMC 3-in-1 Account. After activation, you can subscribe to the Alpha Trader Plan for ₹699/year and start trading at ₹5/order." }
  ];

  return (

    <>
      <section className={`bg-bannerImg bg-cover ${styles.mobileVeiw}`}>
        <div className="container mx-auto p-2 sm:p-5 pb-0">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">

            {/* LEFT CONTENT */}
            <div className="lg:text-left content-center">

              <h2 className={`${styles.heroSectionContentH2}`}>Smarter Trading Starts with</h2>
              <h1 className={`${styles.heroSectionContentH1}`}>Expert Research</h1>

              {/* icon row */}
              <div className="flex lg:justify-start">
                <span className="ml-0 md:ml-2 lg:ml-10 xl:ml-[200px]"><Experticon /></span>
              </div>

              <p className={`${styles.heroSectionContentP} max-w-md lg:max-w-none lg:mx-0`}>
                Experience Trading Backed by Proven Research with ₹0 Brokerage
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
            <div className="flex justify-center lg:justify-end">
              <Heropng />
            </div>

          </div>

        </div>
      </section>



      <section className="StopGuessing bg-slate-50 relative p-10">
        <div className="absolute top-0 left-0 w-[50px] sm:w-[200px] md:w-[350px] lg:w-[500px]">
          <Bggraphic />

        </div>

        <div className="container mx-auto pt-5 pb-5">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

            {/* Left Content */}
            <div className="StopGuessingContant text-center lg:text-left">
              <h3 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl ${styles.StopGuessingContantH3}`}>
                Stop Guessing. Start Trading with Proven Research.
              </h3>
              <p className={`text-1xl sm:text-2xl md:text-2xl lg:text-2xl ${styles.StopGuessingContantP} mt-4`}>
                SMC Nirvana gives you access to SEBI-registered expert calls, advanced analysis tools, and transparent pricing - empowering you to make informed trading decisions every day.
              </p>
            </div>

            {/* Right Benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
              <div className={`aspect-square  bg-[#F2EDFF]  ${styles.StopGuessingBenifitsFirst}`}>
                <h3 className={`text-1xl sm:text-2xl md:text-3xl lg:text-3xl ${styles.StopGuessingBenifitsLayoutContent}`}>Daily Actionable Calls</h3>
              </div>
              <div className={`aspect-square   bg-[#E2F8F3] ${styles.StopGuessingBenifitsSecond}`}>
                <h3 className={`text-1xl sm:text-2xl md:text-3xl lg:text-3xl ${styles.StopGuessingBenifitsLayoutContent}`}>Sector-Wise Insights</h3>
              </div>
              <div className={`aspect-square  bg-[#E2F8F3] ${styles.StopGuessingBenifitsThard}`}>
                <h3 className={`text-1xl sm:text-2xl md:text-3xl lg:text-3xl ${styles.StopGuessingBenifitsLayoutContent}`}>Research-Backed Trades</h3>
              </div>
              <div className={`aspect-square  bg-[#F2EDFF] ${styles.StopGuessingBenifitsLayoutForth}`}>
                <h3 className={`text-1xl sm:text-2xl md:text-3xl lg:text-3xl ${styles.StopGuessingBenifitsLayoutContent}`}>Advanced Charting Tools</h3>
              </div>
            </div>

          </div>
        </div>

      </section>



      <section className="pricing-section bg-pricingImg bg-no-repeat bg-center lg:bg-contain sm:bg-cover ">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">

            {/* Pricing Image - Hidden on mobile */}
            <div className="lg:pt-20 md:pt-20 hidden lg:flex justify-center">
              <Pricingman />
            </div>

            {/* Pricing Table & Content */}
            <div className="pt-12">
              <h3 className={`${styles.pricingSectionH3} text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl`}>
                Transparent Pricing. <br />Smarter Savings.
              </h3>

              <Table className="bg-white rounded-md mt-6 w-full">
                <TableHeader className={styles.pricingTableColor}>
                  <TableRow className="h-14">
                    <TableHead className="text-white text-center text-[21px]">Segment</TableHead>
                    <TableHead className="text-white text-center text-[21px]">Brokerage</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow className="h-14">
                    <TableCell className="text-center text-[19px]">Stock Options</TableCell>
                    <TableCell className="text-center text-[19px]">₹20 per Lot</TableCell>
                  </TableRow>
                  <TableRow className="h-14">
                    <TableCell className="text-center text-[19px]">Index Options</TableCell>
                    <TableCell className="text-center text-[19px]">₹20 per Lot</TableCell>
                  </TableRow>
                  <TableRow className="h-14">
                    <TableCell className="text-center text-[19px]">Intraday</TableCell>
                    <TableCell className="text-center">0.02%</TableCell>
                  </TableRow>
                  <TableRow className="h-14">
                    <TableCell className="text-center text-[19px]">Delivery</TableCell>
                    <TableCell className="text-center text-[19px]">0.20%</TableCell>
                  </TableRow>
                  <TableRow className="h-14">
                    <TableCell className="text-center text-[19px]">Futures</TableCell>
                    <TableCell className="text-center text-[19px]">0.02%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <p className="text-center lg:text-center pt-5 pb-10 text-[14px]">
                Note: First 30 days brokerage-free (up to ₹1000) for new accounts.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="AllInOne pt-20 mb-5 p-5 sm:p-10">

        <Tab />

      </section>


      <section className="WhySection bg-whySectionImg pt-20 bg-cover">
        <div className="container mx-auto">
          <h3 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl ${styles.AllInOneH3}`}>Built for Traders Who Value Research and Reliability</h3>
          <p className={`text-1xl sm:text-2xl md:text-2xl lg:text-2xl ${styles.AllInOneP}`}>Step into a smarter trading ecosystem where SEBI-registered insights, advanced technology, and dependable performance work together for you.</p>

          <ResearchSection />
        </div>

      </section>


      <section className="Howitwork">
        <Howitwork />
      </section>


      <section className="Testimonials">

        <Testimonials />

      </section>


      <section className="awards">

        <div className="p-10 container mx-auto">
          <div className="pb-10">
            <h2 className={`mt-1 text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl ${styles.AwardSliderHeading}`}>
              Why India's Traders Choose SMC for Smarter Decisions
            </h2>
            <p className={`mt-1 text-center text-2xl sm:text-2xl md:text-3xl lg:text-2xl ${styles.AwardSliderPra}`}>
              Real stories from everyday traders who transformed their trading with expert insights, zero-emotion strategies, and clarity-driven decisions.
            </p>

          </div>
          <AwardSlider images={imgs} />


        </div>
      </section>


      <section className="faqs">

        <div>
          <FaqAccordion data={faqData} />
        </div>

      </section>



    </>
  );
}

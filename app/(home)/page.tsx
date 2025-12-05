"use client";
import React from "react";
import styles from "@/components/custom/custom.module.css";
import Hero from '@/components/custom/Hero'
import Tab from "@/components/custom/tab"
import ResearchSection from '@/components/custom/ResearchSection'
import Howitwork from "@/components/custom/HowItWork";
import Testimonials from '@/components/custom/testimonials'
import Image from "next/image";
import AwardSlider from "@/components/custom/AwardSlider";
import FaqAccordion from "@/components/custom/FaqAccordion";
import StopGuessing from '@/components/custom/StopGuessing';
import PricingSection from '@/components/custom/PricingSection'


export default function Home() {





 {/* award slider start  */}
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

  {/* award slider end  */}

  {/* testimonail slider start  */}

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
{/* testimonail slider end  */}
  return (

    <>
      <section className={`bg-bannerImg bg-cover ${styles.mobileVeiw}`}>
        <Hero />
      </section>



      <section className="StopGuessing">
         <StopGuessing />
      </section>



      <section className="pricing-section bg-pricingImg bg-no-repeat bg-center lg:bg-contain sm:bg-cover ">
        <PricingSection />
      </section>



      <section className="AllInOne pt-20 mb-5 p-5 sm:p-10">

        <Tab />

      </section>


      <section className="WhySection bg-whySectionImg pt-20 bg-cover">
       
          <ResearchSection />
       

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

"use client";
import React from "react";
import styles from "@/components/custom/custom.module.css";
import Hero from '@/components/custom/HeroSection'
import Tab from "@/components/custom/AllInOneSection"
import ResearchSection from '@/components/custom/WhyChooseUs'
import Howitwork from "@/components/custom/HowItWorkSection";
import Testimonials from '@/components/custom/TestimonialsSection'
import AwardSlider from "@/components/custom/AwardSection";
import FaqAccordion from "@/components/custom/FaqSection";
import StopGuessing from '@/components/custom/StopGuessingSection';
import PricingSection from '@/components/custom/PricingSection';
import ZeroCostSection from "@/components/custom/ZeroCostSection";


export default function Home() {

  {/* award slider start  */ }
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

  {/* award slider end  */ }

  {/* testimonail slider start  */ }

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
  {/* testimonail slider end  */ }
  return (

    <>
      <section className={`bg-bannerImg bg-cover ${styles.mobileVeiw}`}>
        <Hero />
      </section>

      <section>

      <ZeroCostSection />

      </section>



      <section className="StopGuessing">
        <StopGuessing />
      </section>

      {/*  ------------ 

      <section className="pricing-section bg-pricingImg bg-no-repeat bg-center lg:bg-contain sm:bg-cover ">
        <PricingSection />
      </section>
*/}


      <section className="AllInOne pt-20 mb-5 p-5 sm:p-10">

        <Tab />

      </section>


      <section className="bg-whySectionImg pt-20 bg-cover">

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

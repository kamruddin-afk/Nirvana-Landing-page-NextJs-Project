"use client";
import styles from "@/components/custom/custom.module.css";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  data: FAQItem[];
}

const FaqAccordion: React.FC<FAQProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // ← Default first OPEN

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="container mx-auto space-y-2 pt-20 pb-20 p-10">
        <div className="pb-10">
            <h2 className={`mt-1 text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl ${styles.FaqHeading}`}>
             Frequently Asked Questions
            </h2>
            <p className={`mt-1 text-center mt-1 text-center text-2xl sm:text-2xl md:text-2xl lg:text-2xl ${styles.FaqPra}`}>
             Get quick answers to the most commonly asked questions about Demat Accounts.
            </p>

          </div>
      {data.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={`rounded-lg overflow-hidden transition-all duration-300
              border border-gray-300 
              ${isActive ? "shadow-md text-[#3E4695]" : ""}
              ${isActive ? "border-l-[6px]" : "border-l-[3px]"}
            `}
            style={{ borderLeftColor: isActive ? "#3E4695" : "#d1d5db" }} // left border color dynamic
          >
            {/* HEADER */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span className="font-semibold text-[26px]">{item.question}</span>

              <span
                className={`transition-transform duration-300 ${
                  isActive ? "rotate-90" : "-rotate-90"
                }`}
              >
                &gt;
              </span>
            </button>

            {/* CONTENT */}
            {isActive && (
              <div className="px-4 pb-4 text-[24px] text-[#2B2A29]">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;

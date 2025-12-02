"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/components/custom/custom.module.css";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mayank Kumar",
    location: "Pune",
    message:
      "SMC's research-backed calls reshaped my trading, giving me clarity & confidence from day one.",
    image: "/mayank.png",
  },
  {
    id: 2,
    name: "Robin Sharma",
    location: "Bangalore",
    message:
      "With Nirvana, I finally trade with pure data and signals, removing emotions from decisions.",
    image: "/robin.png",
  },
  {
    id: 3,
    name: "Deepali Sharma",
    location: "Delhi",
    message:
      "Expert calls guide me toward smarter decisions. Trading now structured & confident.",
    image: "/deepali.png",
  },
  {
    id: 4,
    name: "Kamru Verma",
    location: "Mumbai",
    message:
      "Very accurate stock insights and balanced trade calls. Perfect for disciplined trading.",
    image: "/kamru.png",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  // ===== Cards per view according to screen size =====
  let cardsPerView = 3;

  if (typeof window !== "undefined") {
    if (window.innerWidth < 640) cardsPerView = 1; // mobile
    else if (window.innerWidth < 1024) cardsPerView = 2; // tablet
  }

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">

       <h2 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-1 text-center ${styles.TestimonialsHeading}`}>
        Why India's Traders Choose SMC for Smarter Decisions
      </h2>
      <p className={`text-1xl sm:text-2xl md:text-2xl lg:text-2xl mt-1 text-center pb-10 ${styles.TestimonialsPra}`}>
        Real stories from everyday traders who transformed their trading with expert insights, zero-emotion strategies, and clarity-driven decisions.
      </p>


      {/* Slider Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-500"
          style={{
            transform: `translateX(-${current * (100 / cardsPerView)}%)`,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 pb-6 flex-shrink-0"
            >
              <div className="border rounded-2xl p-8 shadow-sm bg-white h-full">
                <div className="flex text-yellow-400 text-xl mb-4">
                  {"★★★★★"}
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t.message}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="rounded-full border"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bullets */}
      <div className="flex justify-center mt-6 gap-3">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all ${
              current === i
                ? "bg-[#3E4695] w-6"
                : "bg-gray-400 w-3 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/components/custom/custom.module.css";

interface AwardSliderProps {
  images: string[];
}

const AwardSlider: React.FC<AwardSliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);


  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // mobile
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(2); 
      } else {
        setItemsPerSlide(4); 
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  return (
    <div className="w-full mx-auto font-serif">
      <div className="pb-10 container mx-auto">
        <h2
          className={`mt-1 text-center text-2xl sm:text-3xl md:text-3xl lg:text-4xl ${styles.AwardSliderHeading}`}
        >
          Awarded the Best Year after Year
        </h2>
        <p
          className={`mt-1 text-center text-xl sm:text-2xl md:text-3xl lg:text-2xl ${styles.AwardSliderPra}`}
        >
          Over the past few years, SMC has been awarded with the following awards
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/4 p-2 flex-shrink-0"
            >
              <div className="relative w-full h-[260px] sm:h-48 md:h-64 rounded-lg overflow-hidden flex justify-center">
                <Image
                  src={img}
                  fill
                  alt="Award"
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${index === i ? "bg-blue-600 scale-110" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardSlider;

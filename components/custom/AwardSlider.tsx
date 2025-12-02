"use client";

import { useState } from "react";
import Image from "next/image";

interface AwardSliderProps {
  images: string[];
}

const AwardSlider: React.FC<AwardSliderProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);


  const totalSlides = Math.ceil(images.length / 4);

  return (
    <div className="w-full mx-auto">

      <div className="overflow-hidden w-full text-center content-center">
        <div
          className="flex transition-all duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/4 p-2 flex-shrink-0 "
            >
              <div className="relative w-full h-auto sm:h-48 md:h-64 rounded-lg overflow-hidden flex justify-center">
                <Image
                  src={img}
                  width={308}
                  height={277}
                  alt={"sd"}
                  className="object-cover"
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
            className={`h-3 w-3 rounded-full ${
              index === i ? "bg-blue-600 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AwardSlider;

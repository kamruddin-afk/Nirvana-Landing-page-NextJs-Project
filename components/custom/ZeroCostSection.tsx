import React from "react";
import Image from "next/image";
import Bggraphic from "@/components/custom/GraphicsResourceIcon"

type CardProps = {
    title: string;
    subtitle: string;
};

const ZeroCostSection = () => {
    return (
        <section className="w-full py-16 font-serif relative">
            <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-white to-blue-50 rounded-3xl pt-10 pb-24">
                <div className="mx-auto max-w-10xl px-4 text-center">
                    <div className="absolute top-10 left-0 w-[50px] sm:w-[200px] md:w-[200px] lg:w-[500px]">
                        <Bggraphic />

                    </div>
                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl font-bold text-[#3E4695]">
                        Where Trust Meets Transparency at ₹0
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-600">
                        Expert guidance delivered with integrity, clarity, and zero hidden costs.
                    </p>

                    {/* Cards */}
                    <div className="flex flex-col items-center gap-5 sm:gap-16 pt-10 sm:pt-0 md:flex-row md:justify-center">

                        {/* Card 1 */}
                        <div className="relative w-full max-w-[330px] rounded-[20px] border border-gray-300 bg-white p-10 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                            <div className="absolute -top-4 -left-3 h-7 w-7 rounded-sm">

                                <Image
                                    src="/pin.svg"
                                    alt="pin Image"
                                    width={400}
                                    height={400}

                                />
                            </div>

                            <div className="flex justify-center items-start text-[#3E4695]">
                                <span className="text-3xl font-bold mt-2">₹</span>
                                <span className="text-[180px] leading-none font-extrabold">0</span>
                            </div>

                            <p className="mt-4 text-center text-lg font-medium text-gray-600">
                                Demat Account Opening
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="relative w-full max-w-[330px] rounded-[20px] border border-gray-300 bg-white mt-0 sm:mt-32 p-10 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                            <div className="absolute -top-4 -left-3 h-7 w-7 rounded-sm">

                                <Image
                                    src="/pin.svg"
                                    alt="pin Image"
                                    width={400}
                                    height={400}

                                />
                            </div>

                            <div className="flex justify-center items-start text-[#3E4695]">
                                <span className="text-3xl font-bold mt-2">₹</span>
                                <span className="text-[180px] leading-none font-extrabold">0</span>
                            </div>

                            <p className="mt-4 text-center text-lg font-medium text-gray-600">
                                Zero Brokerage
                            </p>
                            <p className="text-center text-lg text-gray-500">
                                (for 30 Days upto ₹1000)
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="relative w-full max-w-[330px] rounded-[20px] border border-gray-300 bg-white p-10 shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                            <div className="absolute -top-4 -left-3 h-7 w-7 rounded-sm">

                                <Image
                                    src="/pin.svg"
                                    alt="pin Image"
                                    width={400}
                                    height={400}
                                />

                            </div>

                            <div className="flex justify-center items-start text-[#3E4695]">
                                <span className="text-3xl font-bold mt-2">₹</span>
                                <span className="text-[180px] leading-none font-extrabold">0</span>
                            </div>

                            <p className="mt-4 text-center text-lg font-medium text-gray-600">
                                No AMC for First Year
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZeroCostSection;


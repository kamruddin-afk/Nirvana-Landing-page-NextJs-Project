import React from 'react'
import styles from "@/components/custom/custom.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Advancechartvideo from '@/components/custom/advanceChartVideo'

function Tab() {
    return (
        <div>
            <h3 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl ${styles.AllInOneH3}`}>All-in-One Platform for Research-Driven Trading</h3>
            <p className={`text-1xl sm:text-2xl md:text-2xl lg:text-2xl ${styles.AllInOneP}`}>SMC Ace 2.0 gives you everything you need to trade confidently.</p>

            <div className="max-w-[1100px] mx-auto p-0 sm:p-10">

                <Tabs defaultValue="charting" className="overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[600px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10">

                    <TabsList className="w-full flex-wrap bg-white w-[120%] h-auto">

                        <TabsTrigger value="charting"
                            className="flex flex-col items-start px-4 py-3 pb-5 pt-5 text-left w-full rounded-lg duration-200
        data-[state=active]:bg-[#F3F6FF]     
        data-[state=active]:font-semibold
        data-[state=active]:text-[#0E1A72]    
        data-[state=active]:border-l-8
        data-[state=active]:border-[#3E4695]
        data-[state=inactive]:bg-[#F3F6FF]
         data-[state=inactive]:text-[#2B2A29] "
                        >
                            <span className="text-[26px] text-left leading-[35px]">Advanced Charting Tools</span>
                            <span className="text-[20px] text-left leading-[28px] font-normal">100+ indicators for smart analysis</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="algo"
                            className="flex flex-col items-start px-4 py-3 pb-5 pt-5  text-left w-full rounded-lg duration-200
          data-[state=active]:bg-[#F3F6FF]     
          data-[state=active]:font-semibold
          data-[state=active]:text-[#0E1A72]    
          data-[state=active]:border-l-8
          data-[state=active]:border-[#3E4695] 
          data-[state=inactive]:bg-[#F3F6FF]
          data-[state=inactive]:text-[#2B2A29]"
                        >
                            <span className="text-[26px] text-left leading-[35px]">Free Algo Trading APIs</span>
                            <span className="text-[20px] text-left leading-[28px] font-normal">Automate strategies at no extra cost</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="gtt"
                            className="flex flex-col items-start px-4 py-3 pb-5 pt-5  text-left w-full rounded-lg duration-200
        data-[state=active]:bg-[#F3F6FF]     
        data-[state=active]:font-semibold
        data-[state=active]:text-[#0E1A72]    
        data-[state=active]:border-l-8
        data-[state=active]:border-[#3E4695] 
        data-[state=inactive]:bg-[#F3F6FF]
        data-[state=inactive]:text-[#2B2A29]"
                        >
                            <span className="text-[26px] text-left leading-[35px]">GTT Orders</span>
                            <span className="text-[20px] text-left leading-[28px] font-normal">Set once, trade automatically</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="margin"
                            className="flex flex-col items-start px-4 py-3 pb-5 pt-5  text-left w-full rounded-lg duration-200
        data-[state=active]:bg-[#F3F6FF]     
        data-[state=active]:font-semibold
        data-[state=active]:text-[#0E1A72]    
        data-[state=active]:border-l-8
        data-[state=active]:border-[#3E4695] 
        data-[state=inactive]:bg-[#F3F6FF]
         data-[state=inactive]:text-[#2B2A29]"
                        >
                            <span className="text-[26px] text-left leading-[35px]">4X Margin Trading (MTF)</span>
                            <span className="text-[20px] text-left leading-[28px] font-normal">Multiply your buying power</span>
                        </TabsTrigger>

                        <TabsTrigger
                            value="research"
                            className="flex flex-col items-start px-4 py-3 pb-5 pt-5 text-left w-full rounded-lg duration-200
        data-[state=active]:bg-[#F3F6FF]     
        data-[state=active]:font-semibold
        data-[state=active]:text-[#0E1A72]    
        data-[state=active]:border-l-8
        data-[state=active]:border-[#3E4695]
        data-[state=inactive]:bg-[#F3F6FF]
         data-[state=inactive]:text-[#2B2A29] "
                        >
                            <span className="text-[26px] text-left leading-[35px]">Premium Research Tools</span>
                            <span className="text-[20px] text-left leading-[28px] font-normal ">Expert-backed recommendations</span>
                        </TabsTrigger>
                    </TabsList>


                    <div className="w-full h-auto">
                        <TabsContent value="charting" className="flex items-center justify-center mt-0">

                            <Advancechartvideo />

                        </TabsContent>

                        <TabsContent value="algo" className="flex items-center justify-center mt-0">
                            <Advancechartvideo />
                        </TabsContent>

                        <TabsContent value="gtt" className="flex items-center justify-center mt-0">
                            <Advancechartvideo />
                        </TabsContent>

                        <TabsContent value="margin" className="flex items-center justify-center mt-0">
                            <Advancechartvideo />
                        </TabsContent>

                        <TabsContent value="research" className="flex items-center justify-center mt-0">
                            <Advancechartvideo />
                        </TabsContent>
                    </div>

                </Tabs>

            </div>
        </div>
    )
}

export default Tab

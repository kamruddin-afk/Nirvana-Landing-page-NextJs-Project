import React from 'react'
import styles from "@/components/custom/custom.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Advancechartvideo from '@/components/custom/advanceChartVideo'
import ApiVideo from '@/components/custom/ApiVideo';
import GttOrder from '@/components/custom/GttOrder';
import MtfVideo from '@/components/custom/MtfVideo';

function Tab() {
    return (
        <div>
            <div className='pt-10'>
            <h3 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl pb-2 ${styles.AllInOneH3}`}>All-in-One Platform for Research-Driven Trading</h3>
            <p className={`text-1xl sm:text-2xl md:text-2xl lg:text-2xl ${styles.AllInOneP}`}>SMC Ace 2.0 gives you everything you need to trade confidently.</p>
            </div>

            <div className="max-w-[1100px] mx-auto p-0 sm:p-10 font-serif">

                <Tabs defaultValue="charting" className="overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[600px] gap-4 md:gap-6 lg:gap-10 flex flex-col md:flex-row">

                    <TabsList className="max-w-[700px] flex-wrap bg-white w-[120%] h-auto gap-3 md:gap-0 lg:gap-0 pt-5 sm:pt-0">

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
                            <span className="text-[22px] sm:text-[20px] md:text-[22px] lg:text-[26px] text-left leading-[35px] font-semibold">Ready-Made Options Trading Strategies</span>
                            <span className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] lg:text-[20px] text-left leading-[28px] font-normal">Trade faster with pre-built, proven strategies</span>
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
                            <span className="text-[22px] sm:text-[20px] md:text-[22px] lg:text-[26px] text-left leading-[35px] font-semibold">Advanced Option Chain</span>
                            <span className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] lg:text-[20px] text-left leading-[28px] font-normal">Analyze and execute in one click</span>
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
                            <span className="text-[22px] sm:text-[20px] md:text-[22px] lg:text-[26px] text-left leading-[35px] font-semibold">GTT Orders</span>
                            <span className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] lg:text-[20px] text-left leading-[28px] font-normal">Set once, trade automatically</span>
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
                            <span className="text-[22px] sm:text-[20px] md:text-[22px] lg:text-[26px] text-left leading-[35px] font-semibold">Smart Basket</span>
                            <span className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] lg:text-[20px] text-left leading-[28px] font-normal">Execute multiple trades with one order</span>
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
                            <span className="text-[22px] sm:text-[20px] md:text-[22px] lg:text-[26px] text-left leading-[35px] font-semibold">Actionable Research Insights</span>
                            <span className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] lg:text-[20px] text-left leading-[28px] font-normal ">Clear, expert calls you can act on</span>
                        </TabsTrigger>
                    </TabsList>


                    <div className="h-auto place-items-center sm:place-items-end">
                        <TabsContent value="charting" className="flex items-center justify-center mt-0">

                            <Advancechartvideo />

                        </TabsContent>

                        <TabsContent value="algo" className="flex items-center justify-center mt-0">
                            <ApiVideo />
                        </TabsContent>

                        <TabsContent value="gtt" className="flex items-center justify-center mt-0">
                            <GttOrder />
                        </TabsContent>

                        <TabsContent value="margin" className="flex items-center justify-center mt-0">
                            <MtfVideo />
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

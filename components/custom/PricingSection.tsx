import React from 'react'
import Pricingman from "@/components/custom/pricingMan";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import styles from "@/components/custom/custom.module.css";

function PricingSection() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 font-serif">
      
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
                          <TableCell className="text-center text-[19px]">0.02%</TableCell>
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
    </div>
  )
}

export default PricingSection

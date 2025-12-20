import React from 'react';
import Logo from '@/components/custom/logo';
import styles from "@/components/custom/custom.module.css";


function Header() {
    return (
        <header className='header relative pb-20'>
            <div className='container mx-auto absolute inset-0 p-5 sm:p-10'>

                <div className='flex justify-between justify-items-center content-center pt-0 items-center p-2 sm:p-0 lg:p-0'>
                    <div>
                         <Logo />
                    </div>
                    <div>
                        <h2 className={`text-right text-sm text-md md:text-1xl lg:text-2xl font-bold font-serif ${styles.TradeWithoutLimitsgradient}`}>#GetNirvana</h2>
                    </div>
                   
                </div>

            </div>
        </header>
    )
}

export default Header

import React from 'react';
import Logo from '@/components/custom/logo';
import Trust from '@/components/custom/trust';


function Header() {
    return (
        <header className='header relative pb-20'>
            <div className='container mx-auto absolute inset-0 p-5 sm:p-0 py-5 sm:py-5'>

                <div className='flex justify-between justify-items-center content-center pt-0 items-center'>
                    <Logo />
                    <Trust />
                </div>

            </div>
        </header>
    )
}

export default Header

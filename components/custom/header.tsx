import React from 'react';
import Logo from '@/components/custom/logo';
import Trust from '@/components/custom/trust';


function Header() {
    return (
        <header className='header relative'>
            <div className='container mx-auto absolute inset-0 p-5'>

                <div className='flex justify-between justify-items-center pt-0'>
                    <Logo />
                    <Trust />
                </div>

            </div>
        </header>
    )
}

export default Header

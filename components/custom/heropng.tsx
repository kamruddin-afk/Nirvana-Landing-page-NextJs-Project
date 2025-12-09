import React from 'react'
import Image from 'next/image'

function Heropng() {
  return (
    <div>
      <Image
        src="/hero-section-girl.png"
        width={681} 
        height={664}
        alt=""
        unoptimized
        className="w-[680px] max-lg:w-[520px] max-md:w-[380px] max-sm:w-[300px] h-auto mx-auto"
      />
    </div>
  )
}

export default Heropng

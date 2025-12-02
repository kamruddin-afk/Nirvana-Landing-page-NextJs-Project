import React from 'react'
import Image from 'next/image'

function Researchgirl() {
  return (
    <div>
        <Image src="/research-girl.png"
        width={768} 
        height={618}
        alt=""
        className="w-full h-auto max-md:max-w-[400px] mx-auto"
        
        />
      
    </div>
  )
}

export default Researchgirl

import React from 'react'
import Image from 'next/image'

function Heropng() {
  return (
    <div>
      <Image
        src="/hero.png"
        width={640} 
        height={677}
        alt=""
      />
    </div>
  )
}

export default Heropng

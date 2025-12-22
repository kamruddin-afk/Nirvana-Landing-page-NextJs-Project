import React from 'react'

function MtfVideo() {
  return (
    <div>
       <video
                src="/ActionableResearch.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="rounded-xl"
            />
    </div>
  )
}

export default MtfVideo

import React from 'react'

function MtfVideo() {
  return (
    <div>
       <video
                src="/mtf-video.mp4"
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

import React from 'react'

function ApiVideo() {
  return (
    <div>
        <video
                src="/api-video.mp4"
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

export default ApiVideo

import { Video } from 'lucide-react'
import React from 'react'

function Advancechartvideo() {
    return (
        <div>
            <video
                src="/mobile-show1.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                className="rounded-xl"
            />

        </div>
    );
}

export default Advancechartvideo;

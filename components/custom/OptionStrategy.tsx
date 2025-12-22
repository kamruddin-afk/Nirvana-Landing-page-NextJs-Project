import { Video } from 'lucide-react'
import React from 'react'

function Advancechartvideo() {
    return (
        <div>
            <video
                src="/OptionStrategy.mp4"
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

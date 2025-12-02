import React from 'react'

function Howitwork() {
  return (
    <section className="w-full bg-white p-10 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 items-center gap-10 max-md:grid-cols-1 max-md:text-center">


        <div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl pb-4 font-bold text-[#2b348a]">See How It Works</h2>
          <p className="text-1xl sm:text-2xl md:text-2xl lg:text-2xl font-normal text-[#2b2a29]">Experience how SMC's research-led trading ecosystem helps you make informed decisions. This quick walkthrough highlights how expert insights and seamless execution guide your trades while giving you a cost-efficient start to your journey.</p>
        
        </div>


        <div className="relative flex justify-center">
          <div className="bg-[#F2F5FB] rounded-2xl h-[300px] w-[520px] flex justify-center items-center max-md:w-full max-md:h-[200px]">

            <button className="h-14 w-14 rounded-full bg-[#DCE5FA] flex justify-center items-center shadow hover:scale-110 transition">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="#5267D6">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Howitwork

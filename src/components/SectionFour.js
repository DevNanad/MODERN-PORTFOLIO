import React from 'react'

function SectionFour() {
  return (
    <div className='h-[100vh] text-white bg-gradient-to-b from-transparent via-[#1b1e24] to-[#0d0e11] md:flex' id="secFour">

        {/* Left timeline */}
        <div className="left-timeline px-10 md:flex flex-col flex-[40%] items-end text-right">
          <div className="first-content md:pt-16">
            <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#4d121d]">
              <h2 className='text-2xl p-2'>2001</h2>
              <h5 className='text-sm'>Born Day</h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, maiores.</p>
          </div>
          
        </div>

        {/* Bar timeline */}
        <div className="bar-line w-2 h-[90vh] rounded-xl bg-[#718BFF]"></div>

        {/* Right timeline */}
        <div className="right-timeline flex-[40%]">
          
        </div>
        

    </div>
  )
}

export default SectionFour
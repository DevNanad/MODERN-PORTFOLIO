import React from 'react'

function SectionFour() {


  return (
    <div className='box-border md:flex md:items-center gap-20 md:gap-10 md:flex-col md:justify-center text-white bg-[#171717] poppins ' id="secFour">
      <svg className='rotate-180 booksvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
      </svg>
        
        <h1 className='academics py-10 px-20 text-center text-3xl md:text-4xl font-bold uppercase tracking-widest applesys'>/Academics Timeline</h1>


        {/*TIMELINE*/}
        <div className="timeline py-10 relative overflow-hidden">
        <div className="line-large absolute hidden md:block h-[130vh] md:left-[50%] -translate-x-[4px]"></div>

          {/* Large timeline */}
          <div className="hidden left-timeline h-full py-10 px-10 md:flex flex-col justify-center flex-[40%] text-right">
            
            
            
            {/* Left ONE */}
            <div  className="wrapper-timeline ">

              
              <div className="first-content relative ">
                <div className="left-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2014</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Grade School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>A Government grade school for its citizen located at Zapote Las Pinas City.</p>
              </div>
            </div>

            {/* RIGHT ONE */}
            <div  className="wrapper-timeline">
              <div className="first-content relative">
                <div className="left-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2018</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Junior High School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At PAA (Palawan Adventist Academy) an intitution of Christ founded to spread gospel to everyone bough of academics, located at Tacras Narra Palawan</p>
              </div>
            </div>

            {/* Left TWO */}
            <div className="wrapper-timeline">
              <div className="first-content relative">
                <div className="left-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2020 (March)</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Senior High School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At NLAC (Northern luzon Adventist College) an Adventist institution which value relationship with God, located at Artacho Sison Pangasinan.</p>
              </div>
            </div>

            {/* RIGHT TWO */}
            <div className="wrapper-timeline">
              <div className="first-content relative">
                <div className="left-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2020 (August)</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Started College</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At TCU (Taguig City University) currently taking bachelors degree of Computer Science (BSCS)</p>
              </div>
            </div>
            
          </div>



            <div className="malls  md:hidden flex h-[80vh]">
              <div className="line-large relative left-4 h-full"></div>

              {/* Small timeline */}
              <div className="flex small-timeline h-full py-10 px-8 flex-col gap-10  justify-center flex-[40%] text-right">
              
                {/* Left ONE */}
                <div className="smallwrapper-timeline">
                  <div className="first-content relative">
                    <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                      <h2 className='text-3xl pt-3'>2014</h2>
                      <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Grade School</h5>
                    </div>
                    <p className='shadow-lg p-4 text-center md:text-left hidden md:block'>A Government grade school for its citizen located at Zapote Las Pinas City.</p>
                  </div>
                </div>

                {/* RIGHT ONE */}
                <div className="smallwrapper-timeline">
                  <div className="first-content relative">
                    <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                      <h2 className='text-3xl pt-3'>2018</h2>
                      <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Junior High School</h5>
                    </div>
                    <p className='shadow-lg p-4 text-center md:text-left hidden md:block'>At PAA (Palawan Adventist Academy) an intitution of Christ founded to spread gospel to everyone bough of academics, located at Tacras Narra Palawan</p>
                  </div>
                </div>

                {/* Left TWO */}
                <div className="smallwrapper-timeline">
                  <div className="first-content relative">
                    <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                      <h2 className='text-3xl pt-3'>2020 (March)</h2>
                      <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Senior High School</h5>
                    </div>
                    <p className='shadow-lg p-4 text-center md:text-left hidden md:block'>At NLAC (Northern luzon Adventist College) an Adventist institution which value relationship with God, located at Artacho Sison Pangasinan.</p>
                  </div>
                </div>

                {/* RIGHT TWO */}
                <div className="smallwrapper-timeline">
                  <div className="first-content relative">
                    <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                      <h2 className='text-3xl pt-3'>2020 (August)</h2>
                      <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Started College</h5>
                    </div>
                    <p className='shadow-lg p-4 text-center md:text-left hidden md:block'>At TCU (Taguig City University) currently taking bachelors degree of Computer Science (BSCS)</p>
                  </div>
              </div>
              
            </div>
            </div>
          

        </div>
        

    </div>
  )
}

export default SectionFour
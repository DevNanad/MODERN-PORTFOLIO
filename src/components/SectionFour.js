import React from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

function SectionFour() {
  const { ref:yearone, inView:showIsvisible } = useInView();
  const { ref:junhigh, inView:showJunHighSIsvisible } = useInView();
  const { ref:senhighs, inView:showSenHighSIsvisible } = useInView();
  const { ref:college, inView:showCollegeIsvisible } = useInView();


  return (
    <div className=' box-border md:flex md:items-center gap-20 md:flex-col md:justify-center text-white bg-gradient-to-b from-transparent via-gray-800 to-transparent poppins ' id="secFour">
        
        <h1 className='academics pt-20 md:pt-20 text-center text-3xl md:text-4xl font-bold uppercase tracking-widest applesys'>Academics Timeline</h1>


        {/*TIMELINE*/}
        <div className=" h-[150vh] timeline ">
          

          {/* Large timeline */}
          <div className="hidden left-timeline h-full px-10 md:flex flex-col justify-center flex-[40%] text-right">
            
            
            {/* Left ONE */}
            <div  ref={yearone} className="wrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2014</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Grade School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>A Government grade school for its citizen located at Zapote Las Pinas City.</p>
              </div>
            </div>

            {/* RIGHT ONE */}
            <div  ref={junhigh} className="wrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2018</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Junior High School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At PAA (Palawan Adventist Academy) an intitution of Christ founded to spread gospel to everyone bough of academics, located at Tacras Narra Palawan</p>
              </div>
            </div>

            {/* Left TWO */}
            <div  ref={senhighs} className="wrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2020 (March)</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Senior High School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At NLAC (Northern luzon Adventist College) an Adventist institution which value relationship with God, located at Artacho Sison Pangasinan.</p>
              </div>
            </div>

            {/* RIGHT TWO */}
            <div  ref={college} className="wrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2020 (August)</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Started College</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At TCU (Taguig City University) currently taking bachelors degree of Computer Science (BSCS)</p>
              </div>
            </div>
            
          </div>



            {/* Small timeline */}
            <div className="flex small-timeline h-full px-10 md:hidden flex-col gap-10  justify-center flex-[40%] text-right">
            
            {/* Left ONE */}
            <div  ref={yearone} className="smallwrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2014</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Grade School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>A Government grade school for its citizen located at Zapote Las Pinas City.</p>
              </div>
            </div>

            {/* RIGHT ONE */}
            <div  ref={junhigh} className="smallwrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2018</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Junior High School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At PAA (Palawan Adventist Academy) an intitution of Christ founded to spread gospel to everyone bough of academics, located at Tacras Narra Palawan</p>
              </div>
            </div>

            {/* Left TWO */}
            <div  ref={senhighs} className="smallwrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2020 (March)</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Graduated Senior High School</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At NLAC (Northern luzon Adventist College) an Adventist institution which value relationship with God, located at Artacho Sison Pangasinan.</p>
              </div>
            </div>

            {/* RIGHT TWO */}
            <div  ref={college} className="smallwrapper-timeline">
              <div className="first-content">
                <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className='text-4xl pt-3'>2020 (August)</h2>
                  <h5 className='text-sm paintedblue pb-3 md:tracking-widest'>Started College</h5>
                </div>
                <p className='shadow-lg p-4 text-center md:text-left'>At TCU (Taguig City University) currently taking bachelors degree of Computer Science (BSCS)</p>
              </div>
            </div>
            
          </div>
          

        </div>
        

    </div>
  )
}

export default SectionFour
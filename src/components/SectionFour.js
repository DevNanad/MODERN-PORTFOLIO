import React from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

function SectionFour() {
  const { ref:yearone, inView:showIsvisible } = useInView();
  const { ref:junhigh, inView:showJunHighSIsvisible } = useInView();
  const { ref:senhighs, inView:showSenHighSIsvisible } = useInView();
  const { ref:college, inView:showCollegeIsvisible } = useInView();


  return (
    <div className='h-[200vh] text-white bg-gradient-to-b from-transparent via-[#1b1e24] to-[#0d0e11] ' id="secFour">

        {/*TIMELINE*/}
        <div className=" h-[150vh] pt-36 md:timeline md:flex">

          {/* Left timeline */}
        <div className="md:left-timeline px-10 md:flex flex-col flex-[40%] text-right">
          
          {/* Left ONE */}
          <div  ref={yearone} className="md:wrapper-timeline">
            <div className="first-content">
              <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                <h2 className='text-4xl pt-3'>2014</h2>
                <h5 className='text-sm paintedblue pb-3'>Graduated Grade School</h5>
              </div>
              <p className='shadow-lg p-4 text-center'>A Government grade school for its citizen located at Zapote Las Pinas City.</p>
            </div>
          </div>

          {/* RIGHT ONE */}
          <div  ref={junhigh} className="md:wrapper-timeline">
            <div className="first-content">
              <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                <h2 className='text-4xl pt-3'>2018</h2>
                <h5 className='text-sm paintedblue pb-3'>Graduated Junior High School</h5>
              </div>
              <p className='shadow-lg p-4 text-center'>At PAA (Palawan Adventist Academy) an intitution of Christ founded to spread gospel to everyone bough of academics, located at Tacras Narra Palawan</p>
            </div>
          </div>

          {/* Left TWO */}
          <div  ref={senhighs} className="md:wrapper-timeline">
            <div className="first-content">
              <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                <h2 className='text-4xl pt-3'>2020 (March)</h2>
                <h5 className='text-sm paintedblue pb-3'>Graduated Senior High School</h5>
              </div>
              <p className='shadow-lg p-4 text-center'>At NLAC (Northern luzon Adventist College) an Adventist institution which value relationship with God, located at Artacho Sison Pangasinan.</p>
            </div>
          </div>

          {/* RIGHT TWO */}
          <div  ref={college} className="md:wrapper-timeline">
            <div className="first-content">
              <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                <h2 className='text-4xl pt-3'>2020 (August)</h2>
                <h5 className='text-sm paintedblue pb-3'>Started College</h5>
              </div>
              <p className='shadow-lg p-4 text-center'>At TCU (Taguig City University) currently taking bachelors degree of Computer Science (BSCS)</p>
            </div>
          </div>
          
        </div>
          

        </div>
        

    </div>
  )
}

export default SectionFour
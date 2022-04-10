import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillCheckCircle} from 'react-icons/ai'
import {RiFacebookCircleFill} from 'react-icons/ri'

function Footer() {
  return (
    <div className='flex flex-col items-center text-white pt-20 pb-10 bg-[#1b1d28] poppins'>

        <h1 className='text-center text-2xl font-semibold'>Menard Pajares <span className='font-light port'>Portfolio</span></h1>

        <p className='w-3/5 py-8 text-center text-sm'>The entire menardpajares.com Web site is Copyright &copy;2022 by Menard Pajares. All Rights Reserved. The menardpajares.me site may not be copied or duplicated in whole part by any means without express prior agreement in writing or unless specifically noted on the site.</p>

        <div className="objectives font-semibold grid grid-cols-2 gap-4 md:gap-12 lg:gap-20 md:grid-cols-4 text-sm md:text-md">

            <h3 className='flex items-center md:justify-center'>Clean <AiFillCheckCircle className='text-[#2ded4d]'/></h3>

            <h3 className='flex items-center'>Typography <AiFillCheckCircle className='text-[#2ded4d]'/></h3>

            <h3 className='flex items-center'>Responsive <AiFillCheckCircle className='text-[#2ded4d]'/></h3>
            
            <h3 className='flex items-center'>Appealing <AiFillCheckCircle className='text-[#2ded4d]'/></h3>
        </div>

        <div className="icon-wrapper flex justify-center gap-10 pt-10">
            <a href="https://twitter.com/Kyah_Nad" target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle className='text-4xl cursor-pointer'/></a>
            
            <a href="https://www.facebook.com/jheeyiem" target="_blank" rel="noreferrer noopener"><RiFacebookCircleFill className='text-4xl cursor-pointer'/></a>
            <a href="https://www.linkedin.com/in/pajares-menard-m-986a55222/" target="_blank" rel="noreferrer noopener"><AiFillLinkedin className='text-4xl cursor-pointer'/></a>
        </div>

    </div>
  )
}

export default Footer
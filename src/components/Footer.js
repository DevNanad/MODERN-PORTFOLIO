import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillCheckCircle} from 'react-icons/ai'
import {RiFacebookCircleFill} from 'react-icons/ri'

function Footer() {
  return (
    <div className='flex flex-col items-center text-white pt-20 pb-10 bg-[#1b1d28] poppins'>

        <h1 className='text-center text-2xl font-semibold'>Menard Pajares <span className='font-light port'>Portfolio</span></h1>

        <p className='w-3/5 py-8 text-center text-sm'>The entire menardpajares.com Web site is Copyright &copy;2022 by Menard Pajares. All Rights Reserved. The menardpajares.me site may not be copied or duplicated in whole part by any means without express prior agreement in writing or unless specifically noted on the site.</p>

        <div className="objectives font-semibold flex gap-5 text-sm md:text-md md:gap-20">
            <h3 className='flex items-center'>Clean <AiFillCheckCircle className='text-[#2ded4d]'/></h3>
            <h3 className='flex items-center'>Responsive <AiFillCheckCircle className='text-[#2ded4d]'/></h3>
            <h3 className='flex items-center'>Typography <AiFillCheckCircle className='text-[#2ded4d]'/></h3>
            <h3 className='flex items-center'>Appealing <AiFillCheckCircle className='text-[#2ded4d]'/></h3>
        </div>

        <div className="icon-wrapper flex justify-center gap-10 pt-10">
            <AiFillTwitterCircle className='text-4xl'/>
            <RiFacebookCircleFill className='text-4xl'/>
            <AiFillLinkedin className='text-4xl'/>
        </div>

    </div>
  )
}

export default Footer
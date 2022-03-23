import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';



function Midnavbar() {
  const { ref:stickyNavRef, inView:showIsvisible } = useInView();

  return (
    <div ref={stickyNavRef} className={`${showIsvisible ? 'sticky top-0' : ''} midnav text-md text-xl text-white`}
    >
        <nav className='flex justify-around bg-gray-800 poppins '>
            <span className='p-4'>About</span>
            <span className='p-4'>Mastery</span>
            <span className='p-4'>Timeline</span>
            <span className='p-4'>Design</span>
            <span className='p-4'>Solution</span>
        </nav>
    </div>
  )
}

export default Midnavbar
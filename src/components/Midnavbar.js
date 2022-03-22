import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'


function Midnavbar() {

  return (
    <motion.div className=' sticky top-0 midnav text-md text-xl text-white'
    initial={{x:'100vw'}}
    animate={{x: 0}}
    >
        <nav className='flex justify-around bg-white/5 poppins '>
            <span className='p-4'>About</span>
            <span className='p-4'>Mastery</span>
            <span className='p-4'>Timeline</span>
            <span className='p-4'>Design</span>
            <span className='p-4'>Solution</span>
        </nav>
    </motion.div>
  )
}

export default Midnavbar
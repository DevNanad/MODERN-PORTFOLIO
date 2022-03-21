import React from 'react'
import {motion} from 'framer-motion'

function Midnavbar() {
  return (
    <div className='midnav relative text-xl text-white -translate-y-[4rem] md:-translate-y-[5rem] lg:-translate-y-[8rem]'
    >
        <nav className='flex justify-around lg:mt-2'>
            <span><a href="#">About</a></span>
            <span><a href="#">Mastery</a></span>
            <span><a href="#">Timeline</a></span>
            <span><a href="#">Design</a></span>
            <span><a href="#">Solution</a></span>
        </nav>
    </div>
  )
}

export default Midnavbar
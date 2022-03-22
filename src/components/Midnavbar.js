import React from 'react'
import {motion} from 'framer-motion'

function Midnavbar() {
  return (
    <motion.div className='midnav relative text-xl text-white'
    initial={{x:'100vw'}}
    animate={{x: 0}}
    >
        <nav className='flex justify-around lg:mt-2'>
            <span><a href="#">About</a></span>
            <span><a href="#">Mastery</a></span>
            <span><a href="#">Timeline</a></span>
            <span><a href="#">Design</a></span>
            <span><a href="#">Solution</a></span>
        </nav>
    </motion.div>
  )
}

export default Midnavbar
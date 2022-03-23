import React from 'react'
import { useInView } from 'react-intersection-observer';


function SectionThree() {
const { ref:stickyRef, inView:showIsvisible } = useInView();
  return (
    <div className='flex text-xl text-white h-[130vh]'>
        <div ref={stickyRef} className={`${showIsvisible ? 'sticky bottom-0' : ''} headings flex-[50%] flex flex-col justify-center items-baseline h-[90vh]`}>
        <h1 className='pl-20 text-4xl leading-8 pb-5 nunito font-semibold'>Presently conquering fluency in MERN stack</h1>
        <p className='pl-20 poppins leading-5 italic'>consist with four powerful and modern technologies</p>
        </div>
        <div className="i-know bg-slate-500 p-3 flex-[50%] h-[90vh]">
        </div>
    </div>
  )
}

export default SectionThree
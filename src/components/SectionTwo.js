import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useEffect } from 'react';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function SectionTwo() {
  const { ref:showRef, inView:showIsvisible } = useInView();
  const [ mystory, setMystory] = useState([])
  const [ storyLoading, setStoryLoading ] = useState(true)



  useEffect(() => {
    const getMyStory = async () =>{
      try {
        const response = await fetch('http://localhost:4000/api/admin/story');
        const data = await response.json();
        setMystory(data);

        if(response.ok){
          setStoryLoading(false)
        }

      } catch (error) {
        console.log(error);
      }

      

      
    }
    getMyStory()
  }, [mystory])

  return (
    <div className="SectionTwo z-30 relative poppins flex" >
      <div className="logo-line -left-10 -z-30 flex-none w-40">
        <svg
          width="228"
          height="335"
          viewBox="0 0 316 530"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M113.224 215.132L38.0576 137.447C44.8802 131.877 55.5332 117.696 49.2363 99.9819L48.9999 99.3168H48.294H36.5658H35.5658V100.317C35.5658 102.703 35.2553 106.155 34.3617 108.802C33.912 110.133 33.3509 111.15 32.7048 111.749C32.1155 112.296 31.4466 112.515 30.5471 112.269L30.4173 112.233H30.2827L-100.823 112.233H-101.823V113.233V130.024V131.024H-100.823H-59.7805L312.973 518.469C313.538 520.312 313.939 522.925 313.475 525.086C313.237 526.193 312.786 527.121 312.076 527.787C311.381 528.439 310.355 528.92 308.805 529H-197V416.045L36.9846 416.045H37.0551L37.125 416.035C39.2999 415.726 42.3438 414.616 44.2719 412.178C46.272 409.649 46.89 405.93 44.5978 400.856L44.5263 400.697L44.4057 400.572L-195.325 152.439V1L309.548 1C310.919 1.34353 312.73 2.23156 313.873 3.75397C314.97 5.2157 315.557 7.40044 314.262 10.6334L113.224 215.132Z"
            stroke="url(#paint0_linear_109_13)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_109_13"
              x1="59"
              y1="658.5"
              x2="59"
              y2="-170"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.36373" stopColor="#2FF3FF" />
              <stop offset="0.487252" stopColor="#718BFF" />
              <stop offset="1" stopColor="#2FF3FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="logo-line2 lg:block flex-none w-32  translate-y-24 translate-x-26 hidden">
        <svg
          width="328"
          height="435"
          viewBox="0 0 514 530"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M202.776 314.868L277.942 392.553C271.12 398.123 260.467 412.304 266.764 430.018L267 430.683L267.706 430.683L279.434 430.683L280.434 430.683L280.434 429.683C280.434 427.297 280.745 423.845 281.638 421.198C282.088 419.867 282.649 418.85 283.295 418.251C283.885 417.704 284.553 417.485 285.453 417.731L285.583 417.767L285.717 417.767L416.823 417.767L417.823 417.767L417.823 416.767L417.823 399.976L417.823 398.976L416.823 398.976L375.78 398.976L3.02721 11.5308C2.46198 9.68799 2.0607 7.07489 2.5249 4.9137C2.76269 3.80664 3.21382 2.87946 3.92386 2.21332C4.61871 1.56152 5.64553 1.08032 7.19516 1L513 0.999999L513 113.955L279.015 113.955L278.945 113.955L278.875 113.965C276.7 114.274 273.656 115.385 271.728 117.822C269.728 120.351 269.11 124.07 271.402 129.144L271.474 129.303L271.594 129.428L511.325 377.561L511.325 529L6.45195 529C5.08077 528.656 3.26961 527.768 2.12712 526.246C1.03016 524.784 0.443081 522.6 1.73856 519.367L202.776 314.868Z"
            stroke="url(#paint0_linear_112_6)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_112_6"
              x1="138"
              y1="-185"
              x2="149.5"
              y2="726.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.454061" stopColor="#69F6FF" />
              <stop offset="0.707852" stopColor="#4E6AE2" />
              <stop offset="1" stopColor="#69F6FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div className="hello-container grow bg-[#1B1D28] text-sm  md:transform-none pl-7 md:shadow-gray-500 md:drop-shadow-xl text-md lg:pl-12 pb-4 md:pb-5 lg:pb-[5rem] w-10/12 md:w-9/12 lg:w-9/12 text-white rounded-l-2xl text-justify" id="secHello"
          initial={{y:0, opacity: 0}}
          animate={{y: '-2.5rem', opacity: 1}}
          transition={{type: 'tween', delay: 1}}
          >
        <div className="SectionTwo-title px-10 py-10 md:py-8 ">
          <h2 className="Hello text-5xl">/Hello</h2>
        </div>
        
        {mystory.map((story) => (
          <div 
          key={story._id}
          className="hello-flex flex flex-col md:grid lg:grid-cols-2">
          <div className="hello-image col-span-1 flex flex-col items-center">
            {storyLoading && <Skeleton circle width={280} height={280}/>}

            {!storyLoading && <img src={story.storyImage} alt="Mypic" className="h-72 self-center" />}

            <h1 className="text-center text-xl text-white tracking-[.3rem] py-4 roboto font-semibold ">
              Menard M. Pajares
            </h1>
          </div>

          <div className="hellop col-span-1">
            <h1 className="text-center hidden lg:block lg:pb-10">
              <span className="font-semibold text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Little Story
              </span>
            </h1>
            <motion.p
              className="paragrap1 indent-16 leading-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >{story.paragraph1}</motion.p>

            <p 
            ref={showRef} 
            className={`${showIsvisible ? "showtext" : ""} lg:leading-5`}>{story.paragraph2}</p>

            <p 
            ref={showRef} 
            className={`${showIsvisible ? "showtext2" : ""} lg:leading-5`}>{story.paragraph3}</p>
          </div>
        </div>
        ))}
        
      </motion.div>
    </div>
  )
}

export default SectionTwo;
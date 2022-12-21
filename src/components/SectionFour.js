import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useTimelineStore } from '../store/zustand'

function SectionFour() {
  //const [timelineData, setTimelineData] = useState([]);
  const { fetchapi, timelinedata } = useTimelineStore((state) => state)

  //const url = "https://portfolio-node-api-hjgk.onrender.com";

  //async api call with fetch
  // const fetchInfo = async () => {
  //   const info = await fetch(`${url}/api/timeline`);
  //   const result = await info.json();
  //   setTimelineData(result);
    
  //}

  //REACT QUERY
  const { data, status } = useQuery("timeline", fetchapi);

  //console.log(timelinedata)

  //dynamic timeline data
  // useEffect(() => {

  // }, [data])

  return (
    <div
      className="box-border md:flex md:items-center gap-20 md:gap-10 md:flex-col md:justify-center text-white bg-[#171717] poppins "
      id="secFour"
    >
      <svg
        className="rotate-180 booksvg"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
          className="shape-fill"
        ></path>
      </svg>

      <h1 className="academics py-10 px-20 text-center text-3xl md:text-4xl font-bold uppercase tracking-widest applesys">
        /Academics Timeline
      </h1>

      {/*TIMELINE*/}
      <div className="timeline py-10 relative overflow-hidden">
        
        { status === 'success' && (<div className="line-large absolute hidden md:block h-[130vh] md:left-[50%] -translate-x-[4px]"></div>)}

        

        {/* Large timeline */}
        <div className="hidden left-timeline h-full py-10 px-10 md:flex flex-col justify-center flex-[40%] text-right">
          {/* Left ONE */}

          { status === 'loading' && (<h3>Data is Fetching...</h3>)}
          
          { status === 'error' && (<h3>Error Fetching Data :(</h3>)}

          { status === 'success' && timelinedata.map((data) => (
            <div className="wrapper-timeline " key={data._id}>
              <div className="first-content relative ">
                <div className="left-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                  <h2 className="text-4xl pt-3">{data.year}</h2>
                  <h5 className="text-sm paintedblue pb-3 md:tracking-widest">
                    {data.subtitle}
                  </h5>
                </div>
                <p className="shadow-lg p-4 text-center md:text-left">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="malls  md:hidden flex h-[80vh]">
          { status === 'success' && (<div className="line-large relative left-4 h-full"></div>)}

          {/* Small timeline */}
          <div className="flex small-timeline h-full py-10 px-8 flex-col gap-10  justify-center flex-[40%] text-right">
            {/* Left ONE */}

            { status === 'loading' && (<h3 className="text-center">Data is Fetching...</h3>)}
          
            { status === 'error' && (<h3 className="text-center">Error Fetching Data :(</h3>)}

            { status === 'success' && timelinedata.map((data) => (
              <div className="smallwrapper-timeline" key={data._id}>
                <div className="first-content relative">
                  <div className="year-title rounded-lg text-center font-bold poppins md:mb-6 bg-white text-[#616060] shadow-2xl">
                    <h2 className="text-3xl pt-3">{data.year}</h2>
                    <h5 className="text-sm paintedblue pb-3 md:tracking-widest">
                      {data.subtitle}
                    </h5>
                  </div>
                  <p className="shadow-lg p-4 text-center md:text-left hidden md:block">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;

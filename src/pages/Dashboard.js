import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useTimelineStore } from '../store/zustand'
import logo from '../images/logo.png'
import {FiHome,FiSettings} from 'react-icons/fi'
import {GiBlackBook} from 'react-icons/gi'
import {FaBusinessTime} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen,AiOutlineCrown} from 'react-icons/ai'

export default function Dashboard() {
    const {logoutRequest, username} = useTimelineStore((state) => state)


  return (
    <div className='dashboard-container bg-slate-300 text-white'>
        <div className="sidebar-left drop-shadow-md  h-full flex flex-col justify-between fixed">

          <div className="sidenavbarandlogo">
            <div className="portfolio-logo-holder flex items-center justify-center pt-3 drop-shadow-2xl">
              <img src={logo} alt="logo" className='w-10' />
              <h1 className='text-center p-3 text-lg font-bold tracking-wide'>PORTFOLIO</h1>
            </div>
            

            <div className="content-holder flex flex-col justify-center items-start gap-5 mt-6">
              <Link 
              to="/admin/dashboard" 
              className='flex w-full py-3 px-14' >
                <FiHome className='text-2xl cursor-pointer'/>
                <h3 className='pl-3'>Dashboard</h3>
              </Link>

              <NavLink 
              to="mystory"  
              className='flex w-full py-2 px-14'>
                <GiBlackBook className='text-2xl cursor-pointer'/>
                <h3 className='pl-3'>My Story</h3>
              </NavLink>

              <NavLink 
              to="experience" 
              className='flex w-full py-2 px-14'>
                <FaBusinessTime className='text-2xl cursor-pointer'/>
                <h3 className='pl-3'>Experience</h3>
              </NavLink>

              <NavLink 
              to="projects" 
              className='flex w-full py-2 px-14'>
                <AiOutlineFundProjectionScreen className='text-2xl cursor-pointer'/>
                <h3 className='pl-3'>Projects</h3>
              </NavLink>

              <NavLink 
              to="mastery" 
              className='flex w-full py-2 px-14'>
                <AiOutlineCrown className='text-2xl cursor-pointer'/>
                <h3 className='pl-3'>Mastery/Skills</h3>
              </NavLink>
              

        
            </div>
          </div>

          <button className='flex w-full py-2 mb-3 px-14'>
              <FiSettings className='text-2xl cursor-pointer'/>
              <h3 className='pl-3'>Settings</h3>
          </button>

        </div>
        <nav className='dash-header pt-5 flex items-center justify-between px-5'>

            <h2 className='font-bold text-xl'>Welcome Master <span className='text-[#718BFF] capitalize'>{username}</span></h2>
            <button className='bg-red-400 p-2 rounded-md'>
              <NavLink to="/admin/login" onClick={logoutRequest}>Logout</NavLink>
            </button>
            
        </nav>
        <div className="main-content rounded-md pb-3">
          <Outlet/>
        </div>





    </div>
  )
}

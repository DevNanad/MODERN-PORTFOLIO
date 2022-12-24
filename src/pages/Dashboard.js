import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTimelineStore } from '../store/zustand'
import logo from '../images/logo.png'

import {FiHome,FiSettings} from 'react-icons/fi'
import {GiBlackBook} from 'react-icons/gi'
import {FaBusinessTime} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen,AiOutlineCrown} from 'react-icons/ai'


export default function Dashboard() {
    const {logoutRequest, username} = useTimelineStore((state) => state)

  return (
    <div className='dashboard-container text-white'>
        <div className="sidebar-left drop-shadow-md  h-full px-3 flex flex-col justify-between">

          <div className="portfolio-logo-holder flex items-center justify-center pt-3 drop-shadow-2xl">
            <img src={logo} alt="logo" className='w-10' />
            <h1 className='text-center p-3 text-lg font-bold tracking-wide'>PORTFOLIO</h1>
          </div>
          

          <div className="content-holder flex flex-col justify-center items-start gap-5 pl-5">
            <button className='flex w-full py-3 '>
              <FiHome className='text-2xl cursor-pointer'/>
              <h3 className='pl-3'>Dashboard</h3>
            </button>

            <button className='flex w-full py-2'>
              <GiBlackBook className='text-2xl cursor-pointer'/>
              <h3 className='pl-3'>My Story</h3>
            </button>

            <button className='flex w-full py-2'>
              <FaBusinessTime className='text-2xl cursor-pointer'/>
              <h3 className='pl-3'>Experience</h3>
            </button>

            <button className='flex w-full py-2'>
              <AiOutlineFundProjectionScreen className='text-2xl cursor-pointer'/>
              <h3 className='pl-3'>Projects</h3>
            </button>

            <button className='flex w-full py-2'>
              <AiOutlineCrown className='text-2xl cursor-pointer'/>
              <h3 className='pl-3'>Mastery/Skills</h3>
            </button>
            

      
          </div>

          <button className='flex w-full py-2 mb-3 pl-5'>
              <FiSettings className='text-2xl cursor-pointer'/>
              <h3 className='pl-3'>Settings</h3>
          </button>

        </div>
        <nav className='dash-header flex items-center justify-between px-5'>

            <h2 className='font-bold text-xl'>Welcome Master <span className='text-blue-300 capitalize'>{username}</span></h2>
            <button className='bg-blue-400 p-2 rounded-lg'>
              <NavLink to="/admin/login" onClick={logoutRequest}>Logout</NavLink>
            </button>
            
        </nav>
        <div className="main-content px-5 drop-shadow-lg">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore autem suscipit sed voluptatibus at minus debitis placeat tempora, ut voluptatum animi. Magnam modi, sequi ipsam accusamus sed consequatur maiores. Distinctio sapiente eius voluptates, earum corporis quod sed amet, possimus reiciendis hic iste ipsum voluptatibus sunt. Nobis, inventore! Reiciendis, nesciunt illo.</h1>
        </div>
    </div>
  )
}

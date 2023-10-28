// Layout ...
// import style from './Layout.module.css'
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Settings from '../settings/settings';
import DetectOffline from '../DetectOffline/DetectOffline';



 function Layout() {
  
  return <>
  
  <div className="w-full mx-auto relative overflow-hidden">
  {/* Your internet */}
    <DetectOffline/>
    {/* Your Settings for dark mode */}
    <Settings/>
    <div className='grid grid-cols-12 mx-auto'>
    
      <Navbar/>
      
      
      <div className="col-start-0 col-end-13 md:col-start-3 md:col-end-13 col-span-12 sm:col-span-12 md:col-span-10 lg:col-span-10 ">
      <Outlet></Outlet>
      </div>
      </div>
      {/* <Footer/> */}
  </div>

  </>
}

export default Layout ;
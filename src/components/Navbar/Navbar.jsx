// Navbar ...
// import style from './Navbar.module.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import ahmedAbdeenCV from'../../Assets/Ahmed_Abdeen CV_Front_end_developer.pdf';

 function Navbar() {
 let [opneMenu,SetOpneMenu] = useState(false)
 const [theme,setTheme] = useState(localStorage.getItem('menuTheme')?localStorage.getItem('menuTheme'):'Home')
 const menu =[
  {nameMenu:'Home',path:'/'},
  {nameMenu:'Projects',path:'/Projects'},
  {nameMenu:'Skills',path:'/Skills'},
]
const homeQuery = window.matchMedia('(prefers-color-scheme: home)')
useEffect(()=>{
  switch (theme) {
    case "Home":
      localStorage.setItem('menuTheme','Home')
      break;
      case "Projects":
        localStorage.setItem('menuTheme','Projects')
        break;
        case "Skills":
          localStorage.setItem('menuTheme','Skills')
          break;

    default:
      localStorage.removeItem('menuTheme')
      AlwaysMenu()
      break;
  }
},[theme])
function AlwaysMenu(){
 if(localStorage.theme === 'home'||(!('menuTheme' in localStorage)&&homeQuery)){

 }
}
AlwaysMenu()
  return <>
    <div className='col-start-1 col-end-13 md:col-start-1 mb-12 md:col-end-3'></div>
    <div className="h-auto md:overflow-hidden col-span-12 md:col-start-1 md:col-end-3 w-1/1  md:w-1/6 fixed z-40 left-0 right-0 md:right-auto  md:top-0
      flex md:flex-col justify-between md:px-0 p-4 items-center md:h-screen bg-gray-800 border-b md:border-b-0 md:border-e border-slate-600">
        <div className=''><h2 className='text-white font-bold'>Ahmed Abdeen</h2></div>
        <div onClick={()=>SetOpneMenu(!opneMenu)} className='md:hidden static z-30 transition-all duration-75 ease-in-out'>
          {opneMenu?<AiOutlineClose className='text-white text-2xl hover:text-red-500 cursor-pointer '/>:
          <AiOutlineMenu className='text-white text-2xl hover:text-gray-400 cursor-pointer'/>
          
           }
        </div>
       
        <div className={` absolute md:static  bg-gray-800 md:bg-inherit md:w-auto 
        transition-all duration-500 ease-in flex z-20 md:z-auto flex-col md:flex-col justify-center items-center w-full right-0 h-screen ${opneMenu ? 'top-[0]':'top-[-45rem]'}`}>
        <ul className=''>
          {menu.map((menus)=><li key={menus.nameMenu} onClick={()=>{SetOpneMenu(!opneMenu) ;setTheme(menus.nameMenu)}} >
            <Link className={`${theme === menus.nameMenu && ' after:bg-sky-300 hover:text-sky-300 hover:after:bg-sky-300 text-sky-300 '}font-semibold text-start after:content-[''] hover:after:bg-gray-100 hover:after:h-10 after:absolute after:w-[1px] after:h-full after:top-0 after:left-[50%] after:-translate-x-14 after:bg-gray-700 hover:text-white text-gray-300 py-1 relative w-full cursor-pointer block`} 
            to={menus.path}>{menus.nameMenu}</Link>
            </li>)}
        </ul>
        <div className='border-b my-5 border-white border-opacity-20 w-screen'></div>
        <ol className='flex mt-3 border border-white border-opacity-10 rounded-full py-1'>
          <li className='mx-1'><AiOutlineGithub className='text-white text-2xl hover:text-gray-400 cursor-pointer'/></li>
          <li className='mx-1'><AiFillLinkedin className='text-white text-2xl hover:text-gray-400 cursor-pointer'/></li>
        </ol>
        <div className='mt-6 text-base'>
          <a href={ahmedAbdeenCV} download={ahmedAbdeenCV}>
          <button className="bg-sky-500 text-white hover:bg-sky-700 px-3 py-2 rounded-full ">
              <AiOutlineCloudDownload className='inline me-1 text-lg animate-bounce'/>Save CV
           </button></a>
         </div>
         <div className='text-sm px-3 text-white'><a href="tel:+201000554192">+201000554192</a></div>
       </div>
       
      </div>

  </>
}

export default Navbar ;
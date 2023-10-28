// Settings ...
// import style from './Settings.module.css'
import React, { useEffect, useState } from 'react'
import { BsXLg } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
 function Settings() {
  let [opneSettings,setOpneSettings] = useState (false)
  const [theme,setTheme] = useState (
    localStorage.getItem('theme') ? localStorage.getItem('theme') : "System"
    )
  const element = document.documentElement
  const darkQuery = window.matchMedia('(prefers-color-scheme :dark)')
  
  const settings =[
    {
     icon:"bi bi-brightness-high-fill",
     text:'light'
    },
    {
      icon:"bi bi-moon-fill",
      text:'dark'
     },
     {
      icon:"bi bi-circle-half",
      text:'System'
     },
  ]
  useEffect(()=>{
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
        case 'light':
          element.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          break
      default:
        localStorage.removeItem('theme');
        onAlways()
        break;
    }
    darkQuery.addEventListener('change',(e)=>{
      if(!('theme' in localStorage)){
        if(e.matches){
          element.classList.add('dark');
        }else{
          element.classList.remove('dark');
        }
      }
    })
  },[theme])
  function onAlways(){
    if(localStorage.theme ==='dark' ||(!('theme' in localStorage) && darkQuery.matches)){
      element.classList.add('dark');
    }else{
      element.classList.remove('dark');
    }
  }
  onAlways()
  return <>
    <div className={` ${!opneSettings? '  right-[-121px] group/ahmed dark:hover:bg-slate-900':'righ-0  dark:bg-slate-800 '} right-0 transition-[right_scale] 
    duration-300 ease-in bg-slate-200 fixed dark:bg-slate-800 flex items-center p-1 
    border border-gray-700 dark:border-white dark:border-opacity-10 border-opacity-10 rounded-s 
    shadow-sm  top-20`}>
      <div onClick={()=>setOpneSettings(!opneSettings)}>
        {!opneSettings?<button className='m-2  p-1' ><BsFillGearFill className='text-base group-hover/ahmed:scale-125' /> </button>:
        <button className='m-2 hover:rounded-full hover:bg-red-500 p-1'> <BsXLg className='text-base'/> </button>
        
     }
      </div>
     
    <div className='flex justify-center items-center '>
    {settings.map((ops)=><button 
    key={ops.text} 
    onClick={()=>setTheme(ops.text)}
    className={`${theme === ops.text && 'dark:bg-sky-600 hover:dark:bg-sky-600 hover:bg-sky-400 bg-sky-400'} bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 p-1 rounded-md m-1 w-8 h-8 flex justify-center items-center dark:hover:bg-gray-700 transition-colors `}>
      <i  className={`${ops.icon}`}></i></button>)}
      </div>
    </div>
  </>
}

export default Settings ;
// Skills ...
// import style from './Skills.module.css'
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoJquery } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { BiSolidFileJson } from "react-icons/bi";

import React from 'react'
  
 function Skills() {
  return <>
    <div className='p-5 h-auto sm:h-screen'>
       <h2 className='text-2xl font-bold'>Skills</h2>

       <div className="grid grid-cols-12 gap-3 my-3">

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center z-0 items-center p-2 relative">
            <BiLogoHtml5 className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>HTML5</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center z-0 p-2 relative">
            <BiLogoCss3 className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>CSS3</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoJavascript className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Javascript</span>
            </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoBootstrap className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Bootstrap</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoTailwindCss className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>TailwindCss</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoJquery className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Jquery</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoSass className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Sass</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoGit className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Git</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoGithub className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Github</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoNodejs className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Nodejs</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoReact className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>React</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiSolidFileJson className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>JSON & AJAX & AXIOS</span>
            </div>
        </div>
        
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoRedux className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Redux</span>
            </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex items-center bg-slate-300 dark:bg-slate-800
        border group/item group/item2 border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm">
          <div className=" text-4xl w-12 h-12 flex justify-center items-center p-2 relative">
            <BiLogoTypescript className="group-hover/item:translate-x-3 group-hover/item:opacity-0 duration-300 transition-all "/>
            <BiChevronRight className="absolute top-auto left-auto group-hover/item:translate-x-0 group-hover/item:opacity-100 opacity-0 translate-x-3 duration-300 transition-all"/>
            </div>
          <div className=" border-s border-slate-700 border-opacity-20 dark:border-slate-600 font-semibold w-full h-full flex justify-start items-center p-2">
            <span>Typescript</span>
            </div>
        </div>
        
      
       </div>
    </div>
  </>
}

export default Skills ;
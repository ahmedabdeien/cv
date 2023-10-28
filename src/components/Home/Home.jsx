// Home ...
import ahmed from '../../Assets/images/ahmed.jpg'
import React from 'react'
import {Helmet} from "react-helmet";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
 
 function Home() {

  return <>
  <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
  </Helmet>

  <div className=" flex select-none justify-center items-center w-full overflow-hidden h-screen  md:p-2 ">
  <figure className="dark:bg-slate-800 overflow-hidden dark:border-opacity-10 md:flex border-t border-r border-slate-200 rounded-none sm:rounded-xl max-w-5xl p-8 md:p-0 bg-slate-100">
  <img className="object-cover  md:object-cover w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ahmed} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <h1 className='text-4xl font-bold'><span className='block'>Hello</span><span>I am Ahmed Abdeen</span></h1>
    <blockquote>
      
      <p className="text-lg font-medium">
        <BiSolidQuoteLeft className='inline-block me-1'/>Passionate front-end developer with one year of experience in creating 
        interactive and responsive web applications. Proficient in HTML, CSS, JavaScript,react and 
        popular front-end frameworks. Dedicated to delivering exceptional user experiences. Seeking 
        to join a dynamic team and contribute to innovative web development projects<BiSolidQuoteRight className='inline-block ms-1'/>
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
       contact
      </div> 
      <div className="text-slate-700 dark:text-slate-500 text-center ">
        <span className='flex items-center justify-center md:justify-start'><AiOutlineMail className='text-base me-1'/><a className='hover:underline' href="mailto:ahmedabdeien@gmail.com">ahmedabdeien@gmail.com</a></span>
        <span className='flex items-center justify-center md:justify-start'><AiFillPhone className='text-base me-1'></AiFillPhone><a className='hover:underline' href="tel:+201000554192">01000554192</a></span>
        <span className='flex items-center justify-center md:justify-start'><AiOutlineEnvironment className='text-base me-1'/>St Elnasr , Ma’adi Cairo, Egypt</span>
      </div>
    </figcaption>
  </div>
</figure>
     </div>
  </>
}

export default Home ;
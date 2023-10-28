// Projects ...
// import style from './Projects.module.css'
import Finalweb  from '../../Assets/images/Finalproject.png'
import foods  from '../../Assets/images/foods.png'
import foods1  from '../../Assets/images/foods1.png'
import weather  from '../../Assets/images/Weather.png'
import React from 'react'
import {Helmet} from "react-helmet";
function Projects() {
 const Finalproject =[
    {nameone:"React-js",nametwo:"Bootstrap",},
    {nameone:"React Dom",nametwo:"Bootstrap-icon"},
    {nameone:"React helmet",nametwo:"Axios"},
    {nameone:"React Hot Toast",nametwo:"formik"},
    {nameone:"React-detect-offline",nametwo:"yup"},
    {nameone:"React-loader-spinner",nametwo:"slick-slider"},
  ]
  const skillsData =[
    {name:"HTML",},
    {name:"CSS"},
    {name:"JavaScript"},
    {name:"bootstrap"},
    {name:"bootstrap-icon"},
    {name:"jquery"},
  ]
  return <>
   <Helmet>
          <meta charSet="utf-8" />
          <title>Projects</title>
    </Helmet>
  <div className='p-5'>
    <h2 className='font-bold text-2xl'>Projects</h2> 
     <h3 className='my-3 font-bold dark:bg-slate-700 bg-slate-300 border 
     border-slate-700 border-opacity-20 dark:border-slate-600 rounded-sm p-1'>Finalproject.js</h3>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 '>

<div className='border border-slate-600 rounded-sm w-full h-[14.5rem] overflow-auto touch-auto  '>
  <a href="https://ahmedabdeien.github.io/finalproject/#/Products" 
  target="_blank" rel="noopener noreferrer">
    <img src={Finalweb} alt="Finalproject" /></a>
    </div>

    <div className='w-full'>
    <table className='border-collapse w-full border border-slate-500'>
  <tbody className='dark:bg-slate-800'>
   {Finalproject.map((data)=><tr key={data.nameone}>
      <td className='border border-slate-600 p-1'>{data.nameone}</td>
      <td className='border border-slate-600 p-1'>{data.nametwo}</td>
    </tr>)} 
    <tr>
      <td className='border border-slate-600 p-1' colSpan={2}>Link :
      <a className=" text-blue-600 after:content-['_↗'] hover:underline my-3 ms-2" 
      href="https://ahmedabdeien.github.io/finalproject/#/Products" 
      target="_blank" 
      rel="noopener noreferrer">finalproject</a>
      </td>
    </tr>
  </tbody>
</table>
</div>
{/* --------foods--------------------- */}
<hr className='border-t border-slate-700 border-opacity-20 dark:border-slate-600 my-5 lg:col-span-2'/>
<h3 className='lg:col-span-2 font-bold dark:bg-slate-700 bg-slate-300 border border-slate-700 
border-opacity-20 dark:border-slate-600 rounded-sm p-1'>foods</h3>
<div className='border border-slate-600 rounded-sm w-full overflow-hidden h-[14.5rem] flex'>
  <a href="https://ahmedabdeien.github.io/foods/" target="_blank" rel="noopener noreferrer" 
  className='object-contain relative h-200 z-0 w-14 overflow-hidden object-left-top'>
    <img  className='' src={foods1} alt="" /></a>
  <div className='overflow-auto touch-auto w-full h-[14.5rem]'>
    <a href="https://ahmedabdeien.github.io/foods/" 
    target="_blank" rel="noopener noreferrer">
      <img src={foods} alt="foods"/></a>
  </div>

</div>
<div className=' lg:ps-5'>
  {skillsData.map((data)=><ol key={data.name} className='divide-y divide-opacity-20 dark:divide-slate-700 divide-dashed marker:text-slate-500 list-disc list:text-slate-700 list-inside'>
    <li className='border-b border-slate-700 dark:border-white dark:border-opacity-10 border-opacity-10'>{data.name}</li>
  </ol>)}
<div className='flex items-center'>
<h6>Link :</h6>
<a className=" text-blue-600 after:content-['_↗'] hover:underline my-3 ms-2" 
href="https://ahmedabdeien.github.io/finalproject/#/Products" target="_blank" 
rel="noopener noreferrer">foods</a>
</div>
</div>


{/* -------- Weather --------------------- */}
<hr className='border-t border-slate-700 border-opacity-20 dark:border-slate-600 my-5 lg:col-span-2'/>
<h3 className='lg:col-span-2 font-bold dark:bg-slate-700 bg-slate-300 border border-slate-700 
border-opacity-20 dark:border-slate-600 rounded-sm p-1 group-hover/foods:underline'>Weather</h3>
<div className='border border-slate-600 rounded-sm w-full h-[14.5rem] overflow-auto touch-auto  '>
  <a href="https://ahmedabdeien.github.io/Weather/" 
  target="_blank" rel="noopener noreferrer">
    <img src={weather} alt="Weather" /></a>
    </div>
<div className='lg:ps-5'>
{skillsData.slice('0','5').map((data)=><ol key={data.name} className='marker:text-slate-500 list-disc list:text-slate-700 list-inside'>
    <li className='border-b border-slate-700 dark:border-white dark:border-opacity-10 border-opacity-10'>{data.name}</li>
  </ol>)}
<div className='flex items-center'>
<h6>Link :</h6>
<a className=" text-blue-600 after:content-['_↗'] hover:underline my-3 ms-2" 
href="https://ahmedabdeien.github.io/finalproject/#/Products" target="_blank" 
rel="noopener noreferrer">Weather</a>
</div>
</div>

</div>
    </div>
  </>
}

export default Projects ;
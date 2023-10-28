// NotFound ...
// import style from './NotFound.module.css'

import React from 'react'
import { Link } from 'react-router-dom';

 function NotFound() {

  return <>
    <main class="grid min-h-full place-items-center  h-screen px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-sky-600 ">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight dark:text-slate-300 text-gray-900 sm:text-5xl dark:bg-gradient-to-r dark:from-sky-500 dark:to-slate-600">Page not found</h1>
    <p class="mt-6 text-base leading-7 dark:text-slate-500 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <Link to="/" class="rounded-md dark:bg-sky-500 bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
    </div>
  </div>
</main>
  </>
}

export default NotFound ;
// DetectOffline ...
// import style from './DetectOffline.module.css'
import { Detector, Offline, Online } from "react-detect-offline";
import { BsWifi } from "react-icons/bs";
import { BsWifiOff } from "react-icons/bs";


 function DetectOffline() {
 
  return <>

      	
    <div className=" dark:bg-slate-800 dark:text-white bg-slate-300 border border-slate-600 border-opacity-20 absolute shadow-sm bottom-10 select-none translate-x-[-50%] left-[50%] rounded-md">
    <Offline>
      <div className="flex items-center p-2 ">
        <BsWifiOff className="me-1 text-lg text-red-700"></BsWifiOff>
        Your are currently offline.
      </div>
    </Offline>
    </div>
  </>
}

export default DetectOffline ;
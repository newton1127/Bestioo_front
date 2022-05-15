import React from 'react'
import { CloudUploadIcon, DatabaseIcon,PaperAirplaneIcon,ServerIcon } from '@heroicons/react/solid'
import bgImg from '../assets/cyber-bg.png' 
import heroVid from '../assets/video.mp4';
export const Hero = () => {
  return (
  <div className='w-full h-[90vh] top-[80px]'>
    <video
      className='object-cover h-50px w-full absolute -z-10'
      src={heroVid}
      autoPlay
      loop
      muted
    />
    <div className='w-full h-[110%] flex flex-col justify-center items-center text-white px-4 py-10 text-center'>
      {/* <h1 className='text-indigo-600'>Bestioo</h1> */}
      <h1 className='py-2'>
        <span className='text-8xl'>BeStioo</span> 
      </h1>
      <p className='text-2xl py-4'>
      Be Stioo to give the best of you
      </p>
      <div className='justify-items-center'>
        <button className='m-2'>Get Started</button>
        
      </div>
    </div>
   
  </div>
  )
}
export default Hero ; 
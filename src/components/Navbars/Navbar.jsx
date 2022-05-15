import React , {useState} from 'react' 
import {} from 'react-icons/ai' 
import {MenuIcon, XIcon}from '@heroicons/react/outline'

const Navbar = () => {
    const[nav,setNav]=useState(false)
    const handleClick =()=>setNav(!nav)
  return (  
    <div className='w-screen h-[60px] z-10 bg-black fixed drop-shadow-lg '> 
   <div className='px-2 flex justify-between items-center w-full h-full'>
   
     <div className='flex justify-between'>
     
        <h1 className='text-3xl pt-1 font-bold mr-4 sm:text-4xl'> 
          Bestioo
        </h1> 
        <ul className='hidden md:flex '> 
          <li>Home</li> 
          <li>Home</li> 
          <li>Home</li> 
          
        </ul>
    </div>  
    <div className='hidden md:flex pr-4'> 
    <button className='border-none bg-transparent text-white pr-3'>Sign up </button> 
    <button className='px-8 py-3'>Login</button>
    </div> 
    <div className='md:hidden' onClick={handleClick}>  
      {!nav ? <MenuIcon className='w-5 text-white '/>:<XIcon className='w-5 text-white'/>}
      
    
    </div>
   </div> 
 <ul className={!nav ? 'hidden' :'absolute bg-black w-full px-8'} >
 <li className='border-b-2 bg-black w-full '>Home</li>
 <li className='border-b-2 bg-black w-full '>jenfk</li>
 <li className='border-b-2 bg-black w-full '>lskdnf</li>
 <li className='border-b-2 bg-black w-full '>dsfe</li>
 <div className='flex flex-col my-4'> 
   <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 '>Sign in</button> 
   <button className='px-8 py-3'> Sign in </button>
 </div>
 </ul>
    </div>
    
    
  )
}

export default Navbar
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center h-screen 
    px-5 sm:px-10 lg:px-20 xl:px-[8%] gap-1
    animate-fade-in-up'>
        <div>
            <Image 
              src={assets.Profile_img} 
              alt='' 
              className='rounded-full w-32 transition-transform duration-300 hover:scale-105 shadow-lg' 
            />
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Sanket 
            <span className="inline-block animate-waving-hand">
              <Image src={assets.hand_icon} alt='' className='w-6'/>
            </span>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo transition-opacity duration-700'>
            A Frontend Developer<br/> based in India
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo opacity-80 transition-opacity duration-700'>
            I create beautiful and functional web applications with a focus on user 
            experience and performance.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' 
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center 
            gap-2 transition-transform duration-200 hover:scale-105 dark:hover:none dark:bg-darkTheme
            dark:border-white'>
                Connect
                <Image src={assets.right_arrow_white} alt='' className='w-4 transition-transform 
                duration-200 group-hover:translate-x-1'/>
            </a>
            <a href='/sample-resume.pdf' download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 
            transition-transform duration-200 hover:scale-105 hover:border-black dark:text-black dark:bg-white'>
                Resume
                <Image src={assets.download_icon} alt='' className='w-4 transition-transform duration-200 
                group-hover:-translate-y-1'/>
            </a>
        </div>   
    </div>
  )
}

export default Header

/* Add this to your globals.css or a CSS module for custom keyframes: */

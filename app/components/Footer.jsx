import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <span className="logo-text font-extrabold text-2xl md:text-3xl tracking-tight 
                select-none cursor-pointer transition-transform duration-200 hover:scale-105">
                Sanket
                <span className="logo-dot text-pink-500 text-3xl md:text-4xl ml-1 
                    animate-bounce align-middle">
                    .
                </span>
            </span>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark :assets.email} alt="Email"  
                className="hover:scale-110 transition-transform w-6 cursor-pointer" />
                maitysanket269@gmail.com
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-center justify-between border-t 
                border-gray-400 mx-[10%] py-6 mt-12'>
                <p>
                    © {new Date().getFullYear()} Sanket Maity. All rights reserved.
                </p>
                <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
                    <li><a href="https://github.com/sanketmaity" target="_blank" rel="noopener noreferrer">
                        <Image src={isDarkMode ? assets.github_dark : assets.github} alt="GitHub" width={28} height={28} 
                            className="hover:scale-110 transition-transform cursor-pointer"
                        />
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/sanket-maity-47bab1289/" target="_blank" 
                        rel="noopener noreferrer">
                        <Image src={isDarkMode ? assets.inkedin_dark : assets.linkedin} alt="LinkedIn" width={28} height={28} 
                            className="hover:scale-110 transition-transform cursor-pointer" 
                        />
                    </a></li>
                    <li><a href="https://leetcode.com/u/sanket_maity/">
                        <Image src={isDarkMode ? assets.leetcode_dark : assets.leetcode} alt="LeetCode" width={28} height={28} 
                            className="hover:scale-110 transition-transform cursor-pointer"
                        />
                    </a></li>
                </ul>
        </div>   
    </div>
  )
}

export default Footer

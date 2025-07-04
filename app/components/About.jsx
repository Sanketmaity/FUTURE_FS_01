import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center  text-5xl font-Ovo'>About Me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div >
            <Image src={assets.Profile_img} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1 '>
            <p className='mb-10 max-w-2xl font-Ovo'>
                Hello! I'm a passionate web developer with a keen interest in creating 
                dynamic and responsive web applications. I have a strong foundation in 
                HTML, CSS, and JavaScript, and I'm always eager to learn new technologies 
                and frameworks. My goal is to build user-friendly interfaces that provide 
                an exceptional user experience.
            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6'>
                {infoList.map(({icon,iconDark,title,description},index)=> (
                    <li key={index} className='p-6  border dark:border-black dark:hover:border-white
                    rounded-xl duration-500 hover:scale-105  
                    cursor-pointer shadow-lg hover:-translate-y-2'>
                      <Image src={icon} alt={title} className='w-7 mt-3'/>
                      <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                      <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>
            <h4 className='my-6 text-gray-700 font-Ovo'>Tools I Use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <li key={index} className='p-3 border dark:border-black dark:hover:border-white
                  rounded-xl duration-500 hover:scale-105 hover:border-gray 
                  cursor-pointer shadow-lg hover:-translate-y-2'>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div> 
  )
}

export default About

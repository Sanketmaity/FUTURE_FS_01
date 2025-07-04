import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Contact from './Contact'


const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h1 className='text-center text-5xl font-Ovo'>My Services</h1>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am frontend developer from WestBengal, India with many hand's on project experience
        working with many different tools and framework.
      </p>
      <div className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon,title,description,link},index)=>(
          <div key={index} className='p-6  border dark:border-black dark:hover:border-white
                    rounded-xl duration-500 hover:scale-105 
                    cursor-pointer shadow-lg hover:-translate-y-2'>
               <Image src={icon} alt='' className='w-10'/>
               <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
               <p className='text-sm text-gray-600 leading-5'>{description}</p>   
                <a onClick={() => {const contactSection = document.getElementById('contact');
                if (contactSection) {contactSection.scrollIntoView({ behavior: 'smooth' });}}} 
                  className='flex items-center gap-2 text-sm mt-5'>Contact with me<Image src={assets.right_arrow} 
                  alt='' className='w-4'/></a>      
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

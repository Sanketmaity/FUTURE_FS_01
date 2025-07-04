"use client";
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React,{useEffect, useRef, useState} from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () =>{
    sideMenuRef.current.style.transform = 'translatex(-16rem)'
  }
  const closeMenu = () =>{
    sideMenuRef.current.style.transform = 'translatex(16rem)'
  }
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  return (
  <>
  <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
    <Image src={assets.header_bg_color} alt='' className='w-full'/>
  </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center
      justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
      {/* Logo */}
      <a href="#top">
        <span className="logo-text font-extrabold text-2xl md:text-3xl tracking-tight 
        select-none cursor-pointer transition-transform duration-200 hover:scale-105">
        Sanket<span className="logo-dot text-pink-500 text-3xl md:text-4xl ml-1 
        animate-bounce align-middle">.</span>
        </span>
      </a>
      {/* Nav Links */}
      <ul className={`hidden md:flex gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : 
        "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
        <li><a href="#top" className="font-Ovo hover:text-pink-500 transition-colors duration-200">Home</a></li>
        <li><a href="#about" className="font-Ovo hover:text-pink-500 transition-colors duration-200">About</a></li>
        <li><a href="#services" className="font-Ovo hover:text-pink-500 transition-colors duration-200">Services</a></li>
        <li><a href="#work" className="font-Ovo hover:text-pink-500 transition-colors duration-200">My Work</a></li>
        <li><a href="#contact" className="font-Ovo hover:text-pink-500 transition-colors duration-200">Contact me</a></li>
      </ul>
      <div className='flex items-center gap-4'>
        {/* Theme button */}
        <button onClick={() => setIsDarkMode(!isDarkMode)} className=''>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
        </button>
        {/* Connect Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500
          rounded-full 
          ml-4 font-Ovo transition-colors duration-300  hover:bg-black hover:text-white"
        >Connect<Image src={assets.arrow_icon} alt="Arrow" className="w-4 h-4 transition-transform 
        duration-200 group-hover:translate-x-1" />
        </a>
        {/* Menu Button */}
        <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
        </button>
      </div>
      {/* -- -----modile-menu----- -- */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 
      bottom-0 w-64 z-50 h-screen bg-gray-100 transition duration-500 dark:bg-darkTheme dark:text-white'>
        <div className='absolute right-6 top-6' onClick={closeMenu}>
          <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
        </div>
        
        <li><a href="#top" className="font-Ovo "onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className="font-Ovo "onClick={closeMenu}>About</a></li>
        <li><a href="#services" className="font-Ovo "onClick={closeMenu}>Services</a></li>
        <li><a href="#work" className="font-Ovo "onClick={closeMenu}>My Work</a></li>
        <li><a href="#contact" className="font-Ovo "onClick={closeMenu}>Contact me</a></li>
      </ul>

    </nav>
  </>
  )
}

export default Navbar

'use client'
import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e54b4988-b86a-4369-a746-08059b99b3fb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
      <h1 className='text-center text-5xl font-Ovo'>Get in touch</h1>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, comments, or feedback, 
        please use the 
        form below
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-xl mx-auto rounded-xl shadow-2xl p-8 flex flex-col gap-6
        bg-white/90 dark:bg-[#0a0a23]/60 dark:backdrop-blur-lg dark:shadow-black/60 
        dark:text-white transition-colors duration-500"
      >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold text-gray-700 dark:text-gray-200 
        uppercase text-xs tracking-wider">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border-b border-gray-300 dark:border-gray-400 bg-transparent px-0 py-2 
          focus:outline-none focus:border-black  dark:focus:border-white  dark:text-white placeholder-gray-400 
          dark:placeholder-gray-400 transition"
          placeholder="Your Name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold text-gray-700 dark:text-gray-200 
        uppercase text-xs tracking-wider">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border-b border-gray-300 dark:border-gray-400 bg-transparent px-0 py-2 
          focus:outline-none focus:border-black dark:focus:border-white  dark:text-white placeholder-gray-400 
          dark:placeholder-gray-400 transition"
          placeholder="you@example.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold text-gray-700 dark:text-gray-200 
        uppercase text-xs tracking-wider">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="border-b border-gray-300 dark:border-gray-400 bg-transparent px-0 py-2 
          focus:outline-none focus:border-black dark:focus:border-white dark:text-white placeholder-gray-400 
          dark:placeholder-gray-400 transition resize-none"
          placeholder="Type your message here..."
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-8 py-2 border border-black text-gray-700 rounded-xl transition 
        hover:bg-black hover:text-white dark:bg-transparent dark:border-white dark:hover:bg-blue-900 
        dark:hover:text-white dark:hover:border-blue-900 dark:text-white"
      >
      Send
      </button>
      </form>
      <span>{result}</span>
    </div>
  )
}

export default Contact

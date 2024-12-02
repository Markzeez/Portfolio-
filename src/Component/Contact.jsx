import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  flex justify-center items-center px-4 bg-[#090503] pt-[40x]  '>
      <form method='POST' action="https://formsubmit.co/markzeezibro739@gmail.com" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-600 text-yellow-600 text-start '>Contact</p>
        </div>
        <input className='bg-[#ccd6f6] rounded p-2' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6] rounded' type="email" placeholder='Email' name='email'/>
        <textarea className='bg-[#ccd6f6] p-2 rounded' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white bottom-2 rounded hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center hover:shadow-sm '>Get in touch</button>
      </form>
    
    </div>
  )
}

export default Contact
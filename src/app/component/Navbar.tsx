import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='sm:w-screen h-[150px] sm:h-[60px] py-4 sm:px-[100px] text-8xl sm:text-lg flex justify-between items-center border border-[rgba(255,255,255,0.2)] font-mono'>
      <ul className='w-full sm:w-auto flex sm:gap-4 justify-around'>
        <li>His</li>
        <li className='font-bold'>AI-<span className='text-green-500'>CHATBOT</span></li>
        <li className='sm:hidden'>menu</li>
      </ul>
      <ul className='hidden sm:flex gap-4 items-center'>
        <li>Home</li>
        <li>Contacts</li>
        <li>About</li>
        <Button text={"Login"}/>
      </ul>
    </div>
  )
}

export default Navbar

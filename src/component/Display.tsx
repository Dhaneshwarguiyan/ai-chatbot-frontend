import React from 'react'
import Button from './Button'
import { signIn } from "next-auth/react";

const Display = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='sm:text-6xl text-5xl font-bold'>
      AI-<span className='text-primary'>CHATBOT</span>
      </div>
      <div className='sm:text-xl text-muted-foreground'>
        Powered by Gemini API
      </div>
      <div className='mt-4 text-xl' onClick={() => signIn()}>
      <Button text={"Signin"} type="active"/>
      </div>
    </div>
  )
}

export default Display

import React from 'react'
import Button from './Button'

const Input = () => {
  return (
    <div className='w-full border border-[rgba(255,255,255,0.2)] rounded-lg py-2 px-4 flex'>
        <input type="text" placeholder='Ask anything' className='w-full border-none outline-none'/>
        <Button text={"Send"}/>
    </div>
  )
}

export default Input

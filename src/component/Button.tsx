import React from 'react'

const Button = ({text}:{text:string}) => {
  return (
    <div>
      <button className='bg-green-500 text-black px-4 py-1 rounded-lg'>{text}</button>
    </div>
  )
}

export default Button

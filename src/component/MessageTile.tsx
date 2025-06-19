import Profile from '@/icons/Profile'
import React from 'react'

const MessageTile = ({text,sender}:{text:string,sender:"bot"|string}) => {
  return (
    <div className={`flex ${sender !== "bot" && "flex-row-reverse"} w-full bg-secondary px-3 py-2 gap-3 rounded-2xl items-start`}>
        <div className='mt-2'><Profile/></div>
        <div className='flex flex-col'>
            <div className={`text-muted-foreground text-sm font-inter ${sender !== "bot" && 'self-end'}`}>
              {sender}
            </div>
            <div className='text-foreground text-md font-inter'>
              {text}
            </div>
        </div>
    </div>
  )
}

export default MessageTile


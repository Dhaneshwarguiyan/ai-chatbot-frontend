import Profile from '@/icons/Profile'
import React from 'react'

const MessageTile = ({text,sender}:{text:string,sender:"bot"|string}) => {
  return (
    <div className={`flex ${sender !== "bot" && "flex-row-reverse"} w-full bg-gray-700 px-3 py-2 gap-3 rounded-2xl items-start`}>
        <div><Profile/></div>
        <div>
            {text}
        </div>
    </div>
  )
}

export default MessageTile


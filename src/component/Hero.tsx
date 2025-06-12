import React from 'react'
import HistoryWindow from './HistoryWindow'
import ChatWindow from './ChatWindow'
import Input from './Input'

const Hero = ({children}:{children:React.ReactNode}) => {

  return (
    <div className='h-[100vh] flex'>
      <HistoryWindow />
      <section className='w-full flex flex-col items-center justify-end'>
        <section className='h-full '>
          <ChatWindow>
            {children}
          </ChatWindow>
        </section>
         <section className='sm:w-[720px] w-[90vw]'>
          <Input />
         </section>
        <footer className='h-[10px] text-sm py-3 mb-2'>
          All rights reserved
        </footer>
      </section>
    </div>
  )
}

export default Hero

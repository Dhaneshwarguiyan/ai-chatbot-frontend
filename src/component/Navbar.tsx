'use client'
import Button from './Button'
import History from '../icons/History'
import Menu from '../icons/Menu'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className='absolute w-full h-[60px] py-4 lg:px-[250px] sm:px-[40px] text-2xl sm:text-lg flex justify-between items-center border border-[rgba(255,255,255,0.2)] font-mono bg-[#0A0A0A]'>
      <ul className='w-full sm:w-auto flex sm:gap-4 justify-around items-center'>
        <li><History /></li>
        <li className='font-bold'>AI-<span className='text-green-500'>CHATBOT</span></li>
        <li className='sm:hidden'><Menu /></li>
      </ul>
      <ul className='hidden sm:flex gap-4 items-center'>
        <li>Home</li>
        <li>Contacts</li>
        <li>About</li>
        {session ? (
          <li className='hidden sm:block' onClick={() => signOut()}>
            <Button text={"Logout"} type='active' />
          </li>
        ) : (
          <li className='hidden sm:block' onClick={() => signIn()}>
            <Button text={"Login"} type='active'/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
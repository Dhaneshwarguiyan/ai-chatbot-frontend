'use client'
import Button from './Button'
import History from '../icons/History'
import Menu from '../icons/Menu'
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className='absolute w-full h-[60px] py-4 lg:px-[250px] sm:px-[40px] text-lg sm:text-md flex justify-between items-center border border-border font-inter'>
      <ul className='w-full sm:w-auto flex sm:gap-4 justify-around items-center'>
        <li className='text-muted-foreground'><History /></li>
        <li className='font-bold'>AI-<span className='text-primary'>CHATBOT</span></li>
        <li className='sm:hidden'><Menu /></li>
      </ul>
      <ul className='hidden sm:flex gap-8 items-center text-muted-foreground'>
        <li className='text-foreground'>Home</li>
        <li>Contacts</li>
        <li>About</li>
        {session ? (
          <li className='hidden sm:block text-foreground' onClick={() => signOut()}>
            <Button text={"Logout"} type='active' />
          </li>
        ) : (
          <li className='hidden sm:block text-foreground' onClick={() => signIn()}>
            <Button text={"Signin"} type='active'/>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
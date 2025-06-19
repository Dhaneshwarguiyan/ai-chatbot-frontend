'use client'
import React, { useState } from 'react'
import Button from './Button'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { addMessage } from '@/slices/messageSlice'
import { chatBot } from '@/utils/chatCall'


const Input = () => {
  const [data,setData] = useState("");
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const type = session ? "active" : "inactive";
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setData(e.target.value);
  }
  const submitHandler = (e: { preventDefault: () => void })=>{
    e.preventDefault();
    chat(data);
    const message = {
      text:data,
      sender:"user"
    }
    
    dispatch(addMessage(message));
    setData("");
  }

  const chat = async(text:string)=>{
    const {data} = await chatBot(text);
    const message = {
        text:data.reply,
        sender:"bot"
    };
    dispatch(addMessage(message));
  }
  return (
    <div >
      <form className='w-full border border-border rounded-lg py-2 px-4 flex z-0'>
        <input type="text" placeholder='Ask anything' className='w-full border-none outline-none' value={data} onChange={changeHandler}/>
        <span onClick={submitHandler}><Button text={"Send"} type={type}/></span>
      </form>
    </div>
  )
}

export default Input

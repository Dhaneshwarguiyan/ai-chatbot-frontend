'use client'
import React, { useState } from 'react'
import Button from './Button'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { addMessage } from '@/slices/messageSlice'
import { chatBot } from '@/app/utils/chatCall'


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
      <form className='w-full border border-[rgba(255,255,255,0.2)] rounded-lg py-2 px-4 flex'>
        <input type="text" placeholder='Ask anything' className='w-full border-none outline-none' value={data} onChange={changeHandler}/>
        <span onClick={submitHandler}><Button text={"Send"} type={type}/></span>
      </form>
    </div>
  )
}

export default Input

'use client'
import React, { useState } from 'react'
import Button from './Button'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { addMessage } from '@/slices/messageSlice'
import axios from 'axios'


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

  const chat = async (text: string) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/chat`,{
        message: text,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const message = {
        text: response.data.reply,
        sender: "bot",
      };
    
      dispatch(addMessage(message));
      return response;
    } catch (error) {
      console.error("Error in chatBot:", error);
      return null; // Handle error appropriately
    }
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

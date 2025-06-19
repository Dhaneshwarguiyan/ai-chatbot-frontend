'use client'

import MessageTile from "@/component/MessageTile";
import { RootState } from "@/store/store";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatBot } from "../utils/chatCall";
import { addMessage } from "@/slices/messageSlice";
import { useSession } from "next-auth/react";
import Display from "@/component/Display";

export default function Home() {
  const dispatch = useDispatch();
  const {data : session} = useSession();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const messages = useSelector((state:RootState)=>state.message);
  useEffect(()=>{
    console.log(messages);
    if (scrollRef.current) {
      // Scrolls the specific div to its bottom
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  },[messages])

  const chat = async(text:string)=>{
    const {data} = await chatBot(text);
    const message = {
        text:data.reply,
        sender:"bot"
    };
    dispatch(addMessage(message));
  }

  useEffect(()=>{
    chat("Hello");
  },[]);

  return (
        <div className="w-full h-[80vh] flex flex-col">
          {
            session ? 
            <div className="min-h-full flex flex-col gap-3 pt-3 overflow-y-auto no-scrollbar scroll-auto" ref={scrollRef}>
            {
              messages.map((message, index) => (  
                <span key={index} className={`${message.sender === 'bot' ? "self-start":"self-end"}`}><MessageTile  text={message.text} sender={message.sender}/></span>
              ))
            }
            </div>
            : 
            <Display />
          }
        </div>
  );
}

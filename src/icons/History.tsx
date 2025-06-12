'use client'
import { toggleHistoryWindow } from '@/slices/windowSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

const History = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={()=>{dispatch(toggleHistoryWindow(true))}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  )
}

export default History

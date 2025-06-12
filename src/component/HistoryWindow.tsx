'use client'

import React from 'react'
import HistoryClose from '../icons/HistoryClose'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store';
import { toggleHistoryWindow } from '@/slices/windowSlice';

const HistoryWindow = () => {
    const historyWindow = useSelector((state:RootState) => state.window.historyWindow);
    const dispatch = useDispatch();
  return (
    <>
    {
      historyWindow &&
          <div className='absolute lg:relative h-[100vh] w-[330px] top-0 left-0 bg-[#0A0A0A] z-10 border-r border-r-[rgba(255,255,255,0.2)]'>
          <div className='h-[60px] flex justify-between items-center px-3 border-b border-b-[rgba(255,255,255,0.2)]'>
              <div className='font-mono'>Chat History</div>
              <span onClick={()=>{dispatch(toggleHistoryWindow(false))}} className='cursor-pointer'>
                <HistoryClose />
              </span>
          </div>
      </div>
    }
    </>
  )
}
export default HistoryWindow

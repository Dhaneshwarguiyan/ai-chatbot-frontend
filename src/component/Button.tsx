import React from 'react'

interface buttonPropType {
  text:string;
  type:"active"| "inactive";
}

export default function Button({text,type}:buttonPropType) {
return (
  <button className={`${type === 'inactive' ? 'bg-muted cursor-not-allowed': 'bg-primary'} min-w-[100px] h-[40px] rounded-lg text-[16px] font-medium flex items-center justify-center px-3`} type="submit">
      {text}
  </button>
)
}
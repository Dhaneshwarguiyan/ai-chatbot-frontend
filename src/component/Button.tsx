import React from 'react'

const Button = ({ text, type }: { text: string; type: "active" | "inactive" }) => {
  return (
    <div>
      <button
        className={`${
          type === "inactive" ? "bg-gray-500" : "bg-green-500"
        } text-black px-4 py-1 rounded-lg`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
import React from 'react'

const Button = ({ btn, bgColor = 'bg-[#21421E]', textColor = 'text-white', className = '' }) => {
    return (
        <button
      className={`${bgColor} ${textColor} ${className} px-5 py-2 rounded-lg font-semibold hover:uppercase transition-all duration-300 z-10 `}
    >
      {btn}
    </button>
    )
}

export default Button
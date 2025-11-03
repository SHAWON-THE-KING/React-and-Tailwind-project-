import React from 'react'

const Heading_p1 = ({text, color = 'text-[#C4D600]', size = ' text-2xl', className ='' }) => {
  return (
    <div>
        <p className={`${color} ${size} ${className}`}>{text}</p>
    </div>
  )
}

export default Heading_p1
import React from 'react'

const Heading_p2 = ({text, color='text-[#ffffffcb]', size='text-2xl', height='leading-[166%]' }) => {
  return (
    <>
    <p className={`${color} ${size} ${height}`}>{text}</p>
    </>
  )
}

export default Heading_p2
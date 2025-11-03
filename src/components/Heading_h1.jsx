import React from 'react'

const Heading_h1 = ({text,color='text-white', size='text-7xl', font='font-bold', height='leading-[133%]', className=''}) => {
  return (
    <>
    <h1 className={`${color} ${size} ${font} ${height} ${className}`}>{text}</h1>
    </>
  )
}

export default Heading_h1
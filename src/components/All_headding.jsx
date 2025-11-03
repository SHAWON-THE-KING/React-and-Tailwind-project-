import React from 'react'
import Heading_p1 from './Heading_p1'
import Heading_h1 from './Heading_h1'
import Heading_p2 from './Heading_p2'

const All_headding = () => {
  return (
    <>
      <Heading_p1 text="Hello, Amigo !" />
        <Heading_h1 text="Delicious Food For Your Life" className='py-6'/>
      <Heading_p2 text='For many, food is an experience. It is both a science and an art. It is meant to be savored and enjoyed. In a culture with such passion for food, it is no surprise that we also like talking about it. While the Chinese share that love of food, they also have a love of language.' />
    </>
  )
}

export default All_headding
import React from 'react'
import All_headding from './All_headding'
import Heading_p1 from './Heading_p1'
import Heading_h1 from './Heading_h1'
import Heading_p2 from './Heading_p2'
import Recommendation from './Recommendation'

const About = () => {
  return (
    <>
      <div className='flex mt-80 mx-40'>
        <div className='relative w-4xl'>
          <img src="/Card Main2.png" alt="mobile-bg"/>
          <img src="/Mobile-3.png" alt="mobile logo" className='hover:scale-125 duration-200 absolute top-0' />
        </div>

        <div className='w-4xl mr-11'>
          <Heading_p1 text="Hello, Amigo !" color='text-[#009000]' />
          <div className='py-6'>
            <Heading_h1 text="The best quality food for your Health" color='text-b'/>
          </div>
          <Heading_p2 text='New Year is over. Months ago. Is your New Year’s resolution to eat healthy on a rocky terrain now? Then, you’ve got to do more than just look away from the fried chicken your colleague just ordered.' color='text-[#21421E]' />

          <div className='flex gap-23 py-10 justify-center'>
            <img src="/Rectangle 13.png" alt="" className='hover:scale-125 duration-200'/>
            <img src="/Rectangle 14.png" alt="" className='hover:scale-125 duration-200'/>
            <img src="/Rectangle 15.png" alt="" className='hover:scale-125 duration-200'/>
          </div>
        </div>
      </div>
      <Recommendation/>
    </>
  )
}

export default About
import React from 'react'
import Heading_p2 from './Heading_p2'
import Heading_p1 from './Heading_p1'

const Footer = () => {
  return (
    <>
    <footer className='flex justify-around place-items-center
 mt-40 h-[500px] bg-[#172E15]'>
        <div className='w-[350px]'>
            <img src="/footer-logo.png" alt="" />
            <Heading_p2 
            text="From your neighborhood sushi spot to 
            the burger you crave, Choose from over 
            +000K local and national favotuite across
             India , Us and UK. "
            />
        </div>

        <div className='py-2'>
            <Heading_p1
            text='SOFTWARE'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='HARDWARE'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='COMPANY'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='PROGRAMS'
            className='py-5 hover:opacity-50'
            />
        </div>

        <div className='py-2'>
            <Heading_p1
            text='ABOUT US'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='HOW IT WORKS'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='CONTACT'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='BLOG'
            className='py-5 hover:opacity-50'
            />
        </div>

        <div className='py-2'>
            <Heading_p1
            text='TWITTER'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='FACEBOOK'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='INSTAGRAM'
            className='py-5 hover:opacity-50'
            />
            <Heading_p1
            text='LOCATION'
            className='py-5 hover:opacity-50'
            />
        </div>

        <div className='w-[200px] py-5'>
            <h3 className='text-white text-2xl font-semibold hover:opacity-50'>
                OUR OFFICE
            </h3>
            <Heading_p2 
            text="Birmingham south, England, UK."
            />
        </div>
    </footer>
    </>
  )
}

export default Footer
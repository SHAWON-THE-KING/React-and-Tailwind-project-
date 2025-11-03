import React from 'react'
import All_headding from './All_headding'
import Button from './Button'
import About from './About'

const Banner = () => {
    return (
        <>
            <div className='flex justify-end mt-20'>
                <img className='absolute hover:scale-75 duration-200' src="/Mobile-2.png" alt="" />
                <img className='hover:scale-85 duration-200 absolute right-30 top-10' src="/Mobile-1.png" alt="" />
            </div>
            <div className='w-[610px] mx-40 my-25'>
                <All_headding/>
                <Button btn="Download App" bgColor="bg-white" textColor="black" className ='mt-10'/>
            </div>
            <img src="/Card MAin1.png" alt="bg" className='absolute top-0 left-0 -z-50 h-[110%] w-[60%]' />

            <About/>
        </>
    )
}

export default Banner
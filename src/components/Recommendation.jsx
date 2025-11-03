import React from 'react'
import Heading_p1 from './Heading_p1'
import Heading_h1 from './Heading_h1'
import Discount from './Discount'

const Recommendation = () => {
    return (
        <>
            <div className='text-center mt-40'>
                <Heading_p1 text="Recommendation" color='text-[#009000]' />
                <Heading_h1 text="Hey,let’s Try something New" className='py-6' color='text-b' />
                <div className='flex gap-10 justify-around mt-10 px-10'>
                    <div className='relative hover:scale-105 duration-200'>
                        <img src="/Card2 (1).png" alt="" />
                        <h3 className='absolute bottom-10 right-10 text-2xl font-bold text-[#ffff]'>Mint Omlate</h3>
                    </div>
                    <div className='relative hover:scale-105 duration-200'>
                        <img src="/Card2 (2).png" alt="" />
                        <h3 className='absolute bottom-10 right-10 text-2xl font-bold text-[#ffff]'>Sweet Vegetable</h3>
                    </div>
                    <div className='relative hover:scale-105 duration-200'>
                        <img src="/Card2.png" alt="" />
                        <h3 className='absolute bottom-10 right-10 text-2xl font-bold text-[#ffff]'>Cream tost</h3>
                    </div>
                </div>
            </div>

            <Discount/>
        </>
    )
}

export default Recommendation
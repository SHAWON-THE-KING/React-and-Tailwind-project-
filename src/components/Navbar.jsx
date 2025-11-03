import React from 'react'
import Button from './Button'
import Banner from './Banner'
const Navbar = () => {
    return (
        <>
            <nav >
                <div className='flex justify-between py-5 px-25'>
                    <div className='flex gap-[380px] place-items-center'>
                        <a href="#"><img src="/header-logo.png" alt="" /></a>
                        <div className='flex gap-10 font-light text-[#f5f5f5b7] text-[18px] z-10 '>
                            <a href='#' className="hover:text-white hover:font-bold transition-all duration-200 ">Home</a>
                            <a href='#' className="hover:text-white hover:font-bold transition-all duration-200">About Us</a>
                            <a href='#' className="hover:text-white hover:font-bold transition-all duration-200">Cooks</a>
                            <a href='#' className="hover:text-white hover:font-bold transition-all duration-200">Get App</a>
                        </div>
                    </div>
                    <div className='flex gap-5 place-items-center'>
                        <Button btn="Register" />
                    </div>
                </div>
            </nav>

            <Banner/>
        </>
    )
}

export default Navbar

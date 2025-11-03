import React from 'react';
import Heading_h1 from './Heading_h1';
import Button from './Button';
import Footer from './Footer';

const Discount = () => {
  return (
    <>
    <div className="bg-[#025b02cd] mt-40 mb-10 mx-35 py-30 rounded-[100px] text-center">
      <div className=" px-30">
        <Heading_h1
          color="text-white"
          height="leading-[166%]"
          text="Get up to 50% off when making transaction on our app"
        />

        <h3 className="text-white text-2xl py-7">
          Only available on the iOS platform — or download{' '}
          <span className="font-semibold uppercase">
            <a href="#" className="hover:text-amber-200">
              Demo Android App?
            </a>
          </span>
        </h3>

        <Button
           btn="📲 Download App"
          bgColor="bg-white"
          textColor="text-black"
          className="mt-10"
        />
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Discount;

import React from 'react'



function Footer() {
  return (
    <>
      <div className='w-screen bg-black'>
        <div className='md:flex mb-12 py-6 border-b-[1px] border-[#1b1a1e] items-center font-playfair mx-8 text-white justify-between'>
          <div className='font-playfair md:mb-0 mb-4 font-bold just text-[36px]'>trendlify</div>
          <div className='flex text-[#656873]'>
            <div className='font-semibold md:ml-4 text-xl hover:underline'>About</div>
            <div className='font-semibold ml-4 text-xl hover:underline'>Login</div>
            <div className='font-semibold ml-4 text-xl hover:underline'>Contact</div>
          </div>
        </div>
        <div className='md:flex mx-6 pb-12 font-playfair font-semibold text-xl text-[#656873] justify-between'>
          <div className='md:mb-0 mb-4'>© 2024 All rights reserved</div>
          <div className='md:flex'>
            <div className='md:mb-0 mb-4 md:ml-4 hover:underline'>Terms Of Service</div>
            <div className='md:mb-0 mb-4 md:ml-4 hover:underline'>Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
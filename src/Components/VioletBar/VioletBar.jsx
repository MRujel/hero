import React from 'react';

const VioletBar = () => {
    return (
        <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] p-4 sm:p-6 lg:p-10'>
            <h2 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center px-4'>Trusted by Millions, Built for You</h2>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-40 mb-4 mt-4 sm:mt-6'>
                <div className='text-center w-full sm:w-auto'>
                    <p className='text-xs sm:text-sm text-white'>Total Downloads</p>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-white'>29.6M</h2>
                    <p className='text-sm text-white'>21% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-xs sm:text-sm text-white'>Total Reviews</p>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-white'>906K</h2>
                    <p className='text-sm text-white'>46% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-xs sm:text-sm text-white'>Active Apps</p>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-white'>132+</h2>
                    <p className='text-sm text-white'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default VioletBar;
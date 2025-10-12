import React from 'react';

const VioletBar = () => {
    return (
        <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] p-10'>
            <h2 className='text-white text-[48px] text-center '>Trusted by Millions, Built for You</h2>
            <div className='flex justify-center items-center gap-40 mb-4 mt-2'>
                <div className='text-center'>
                    <p className='text-sm text-white'>Total Downloads</p>
                    <h2 className='text-[64px] text-white'>29.6M</h2>
                    <p className='text-sm text-white'>21% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-sm text-white'>Total Reviews</p>
                    <h2 className='text-[64px] text-white'>906K</h2>
                    <p className='text-sm text-white'>46% more than last month</p>
                </div>
                <div className='text-center'>
                    <p className='text-sm text-white'>Active Apps</p>
                    <h2 className='text-[64px] text-white'>132+</h2>
                    <p className='text-sm text-white'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default VioletBar;
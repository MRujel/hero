import React from 'react';
import heropic from '../../assets/hero.png'


const hero = () => {
    return (
        <div className='text-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
           <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold leading-none'>We Build</h2>
           <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold leading-none'><span className='text-[#632ee3] '>Productive</span> Apps</h2>
           <p className='max-w-[900px] mx-auto mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           <div className='flex gap-3 sm:gap-4 justify-center mt-4 sm:mt-6'>
            <button className='btn'>Google Play</button>
            <button className='btn'>Play Store</button>
           </div>
           <img className='mx-auto max-w-full h-auto mt-6 sm:mt-8 rounded-lg' src={heropic} alt="" />
        </div>
    );
};

export default hero;
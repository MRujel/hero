import React from 'react';
import heropic from '../../assets/hero.png'


const hero = () => {
    return (
        <div className='text-center max-w-[1200px] mx-auto'>
           <h2 className='text-[72px] font-bold leading-none'>We Build</h2>
           <h2 className='text-[72px] font-bold leading-none'><span className='text-[#632ee3] '>Productive</span> Apps</h2>
           <p className='max-w-[900px] mx-auto mt-2'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
           <div>
            <button className='btn'>Google Play</button>
            <button className='btn'>Play Store</button>
           </div>
           <img className='mx-auto' src={heropic} alt="" />
        </div>
    );
};

export default hero;
import React from 'react';
import dbutton from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import demo1 from '../../assets/demo-app (1).webp'

const AppCard = ({app}) => {
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='bg-white p-3 sm:p-4 shadow-sm rounded-lg'>
                <img  src={image} alt="" className='w-full h-32 sm:h-40 md:h-48 object-cover rounded-md'/>
                <h3 className='my-2 font-semibold text-sm sm:text-base md:text-lg'>{title}</h3>
                <div className='flex justify-between gap-2'>
                    <button className= 'btn bg-[#f1f5e8] flex items-center w-20 sm:w-24'>
                        <img className='w-4 h-4 sm:w-[25px] sm:h-[25px]' src={dbutton} alt="" />
                        <p className=' text-[#00d390] text-sm sm:text-lg md:text-xl'>{downloads}</p>
                    </button>
                    <button className='bg-[#fff0e1] btn w-20 sm:w-24 '>
                        <img className='w-4 h-4 sm:w-[25px] sm:h-[25px]' src={star} alt="" />
                        <p className='text-[#ff8811] text-sm sm:text-lg md:text-xl px-1'>5</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
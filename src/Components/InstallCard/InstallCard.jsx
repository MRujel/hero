import React from 'react';
import dbutton from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import demo1 from '../../assets/demo-app (1).webp'
const InstallCard = ({ app, onUninstall }) => {
    console.log(app)
    return (
        <div>
            <div className='bg-white p-3 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 shadow-sm rounded-lg'>
                <div className='flex gap-3 sm:gap-5 w-full sm:w-auto'>
                    <img className='w-16 sm:w-[70px] h-16 sm:h-[70px] object-cover rounded-md flex-shrink-0' src={app.image} alt="" />
                    <div>
                        <h2 className='text-[20px] font-semibold mb-3'>{app.title}</h2>
                        <div className='flex flex-wrap gap-2 sm:gap-3'>
                            <div className='flex gap-1'>
                                <img className='w-[20px] h-[20px]' src={dbutton} alt="" />
                                <p className='text-[#00d390]'>{app.download}</p>
                            </div>
                            <div className='flex gap-1'>
                                <img className='w-[20px] h-[20px]' src={star} alt="" />
                                <p className='text-[#ff8811]'>{app.ratingAvg}</p>
                            </div>
                            <div>
                                <p className='text-[#627382]'>{app.size} MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => onUninstall(app.id)}  className='btn bg-green-500 px-3 sm:px-4 text-sm sm:text-base w-full sm:w-auto'>Uninstall</div>
            </div>
        </div>
    );
};

export default InstallCard;
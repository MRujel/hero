import React, { useState, useEffect } from 'react';
import dbutton from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import rating from '../../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer } from 'recharts';


const DetailCard = ({ singleApp }) => {
    const [installed, setInstalled] = useState(false)
    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    installedApps.push(singleApp);
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
    setInstalled(true)
    alert('app is installed')
    }
    const ratings = singleApp.ratings
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                <img className='w-[300px] h-[300px] sm:w-[50] sm:h-[50] rounded-lg' src={singleApp.image} alt="" />
                <div>
                    <h2 className='text-xl sm:text-2xl lg:text-[32px] font-semibold'>{singleApp.title}</h2>
                    <p className='text-sm sm:text-base'>Developed by <span className='text-[#00d390]'>{singleApp.companyName}</span></p>
                    <div>
                        <div className="flex w-full flex-col">
                            <div className="divider my-1"></div>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-4 sm:gap-6 lg:gap-10 mb-4'>
                        <div className='flex-1 min-w-[100px]'>
                            <img className='mb-2 w-6 h-6 sm:w-8 sm:h-8' src={dbutton} alt="" />
                            <p className='text-xs sm:text-sm'>Downloads</p>
                            <h2 className='text-2xl sm:text-3xl lg:text-[40px] font-bold'>{singleApp.downloads}</h2>
                        </div>
                        <div className='flex-1 min-w-[100px]'>
                            <img className='mb-2 w-6 h-6 sm:w-8 sm:h-8' src={star} alt="" />
                            <p>Average Rating</p>
                            <h2 className='text-2xl sm:text-3xl lg:text-[40px] font-bold'>{singleApp.ratingAvg}</h2>
                        </div>
                        <div className='flex-1 min-w-[100px]'>
                            <img className='mb-2 w-6 h-6 sm:w-8 sm:h-8' src={rating} alt="" />
                            <p>Total Reviews</p>
                            <h2 className='text-2xl sm:text-3xl lg:text-[40px] font-bold'>{singleApp.reviews}</h2>
                        </div>
                    </div>
                    <button onClick={handleInstall} disabled={installed} className='btn bg-[#00d390] disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto text-sm sm:text-base'> {installed? 'Installed' : `Install Now (${singleApp.size} MB)`}</button>
                </div>
            </div>
            <div>
                <div className="w-full max-w-[1200px] p-4 sm:p-6 lg:p-8 bg-white">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ratings</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={ratings}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                        >
                            
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" />
                            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                                {ratings.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill="#ff8c00" />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='p-8'>
                <h2 className='font-bold text-xl'>Description</h2>
                <p>{singleApp.description}</p>
            </div>
        </div>
    );
};

export default DetailCard;
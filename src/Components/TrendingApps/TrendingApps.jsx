import React, { Suspense } from 'react';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = ({data}) => {
    return (
        <div>
            <div>
                <h2 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-black px-4'>Trending Apps</h2>
                <p className='text-center text-xs sm:text-sm font-[#627382] px-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8'>
                {
                data.slice(0, 8).map(app=>(
                    <AppCard app={app}></AppCard>
                ))
            }

            </div>
            </Suspense>
            
            <Link to='/apps'><div className='flex justify-center mt-4'>
                <button className=' text-white btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] mt-4 mx-auto text-xl font-bold'>Show More</button>
            </div></Link>

            
        </div>
    );
};

export default TrendingApps;
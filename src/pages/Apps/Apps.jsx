import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../../Components/TrendingApps/AllApps/AllApps';

const Apps = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div>
                <h2 className='text-center font-bold text-2xl sm:text-3xl lg:text-[40px] text-black px-4'>Our All Applications</h2>
                <p className='text-center text-xs sm:text-sm font-[#627382] px-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8'>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6'>
                    <h3 className='text-base sm:text-lg font-bold'>({data.length}) Apps Found</h3>
                    <div>
                        <label className="input w-full sm:w-auto">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6'>
                    <Suspense fallback={<p>loading....</p>}>
                        {
                            data.map(app => (
                                <AllApps app={app}></AllApps>
                            ))
                        }
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Apps;
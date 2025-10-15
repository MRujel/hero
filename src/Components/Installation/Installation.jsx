import React, { useEffect, useState } from 'react';
import dbutton from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import demo1 from '../../assets/demo-app (1).webp'
import InstallCard from '../InstallCard/InstallCard';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);

useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
    setInstalledApps(apps);
}, []);

const handleUninstall = (appId) => {
    
    const updatedApps = installedApps.filter(app => app.id !== appId);
    
    
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
};
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-[48px] font-bold'>Your Installed Apps</h2>
                <p className='text-[#627382] text-sm'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='my-5'>
                <h3 className='text-[24px] font-bold'>{installedApps.length} Apps Found</h3>
                {installedApps.length > 0 ? (
        installedApps.map((app) => (
            <InstallCard 
                key={app.id} 
                app={app} 
                onUninstall={handleUninstall}
            />
        ))
    ) : (
        <p className='text-center text-gray-500 mt-10'>No apps installed yet</p>
    )}
                
            </div>
        </div>
    );
};

export default Installation;
import React from 'react';
import Hero from '../../Components/Hero/hero';
import VioletBar from '../../Components/VioletBar/VioletBar';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data = useLoaderData()
    
    return (
        <div className=''>
        <Hero></Hero>
        <VioletBar></VioletBar>
        <TrendingApps data={data}></TrendingApps>
        </div>
    );
};

export default Home;
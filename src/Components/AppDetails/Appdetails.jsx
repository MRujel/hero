import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailCard from '../DetailCard/DetailCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer } from 'recharts';


const Appdetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleApp = data.find(app => parseInt(app.id) === bookId)
    const ratings = singleApp.ratings;
    console.log(ratings)


    
    
    return (
        
        <div>
            <DetailCard singleApp={singleApp}>

            </DetailCard>
        </div>
    );
};

export default Appdetails;
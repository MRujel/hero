import React from 'react';
import error from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className='max-w-[1200px] bg-white p-4 sm:p-10 mx-auto flex flex-col justify-center items-center'>
            <img className='max-w-[300px] sm:max-w-[400px] md:max-w-full' src={error} alt="" />
            <h2 className='text-2xl sm:text-3xl md:text-[48px] font-bold text-center'>Oops, page not found!</h2>
            <p className='text-[#627382] text-sm'>The page you are looking for is not available.</p>
            <button onClick={()=>navigate(-1)} className='btn bg-[linear-gradient(125.07deg,#632EE3,rgba(159,98,242,1)_100%)] text-white textarea-lg'>Go Back</button>
        </div>
    );
};

export default ErrorPage;
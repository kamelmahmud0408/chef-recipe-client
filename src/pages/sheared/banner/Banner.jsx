import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className='container mx-auto lg:flex  '>
                <img className='w-full  rounded-lg my-20' src="https://i.ibb.co/7vbvvNM/full-paper-bag-different-health-food-white-background-top-view-flat-lay-85590445-removebg-preview.png" alt="" />
                <div className=' flex justify-center items-center ms-10'>
                    <div className=' '>
                        <h1 className='text-4xl  font-bold'>Healthe Food <br /> Healthy <span className='text-blue-500'>Life</span></h1>
                        <h3 className='text-2xl text-gray-900 mt-5 font-semibold'>Authentic food tours, traditional cooking classes,immersive tastings and many other tailor made activities.
                        </h3>
                        <p className='my-2'>Eating a healthy diet is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
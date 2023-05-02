import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto flex'>
                <img className='w-full mt-10 rounded-lg' src="https://i.ibb.co/1J6wLVB/chef-cooking-harmony-woman-food-big-pot-89485044-removebg-preview.png" alt="" />
                <div className='h-96 flex justify-center items-center text-center'>
                    <div>
                        <h1 className='text-4xl text-blue-500'>Live, taste, enjoy
                            your experience!</h1>
                        <h3 className='text-2xl text-gray-900 mt-5'>Authentic food tours, traditional cooking classes,immersive tastings and many other tailor made activities.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
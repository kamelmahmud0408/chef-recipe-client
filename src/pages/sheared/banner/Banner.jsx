import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto flex'>
                <img className='w-full mt-10 rounded-lg' src="https://media.istockphoto.com/id/1198965908/photo/organic-vegan-food.jpg?s=170667a&w=0&k=20&c=N5yEBd1PhX-oscR_Y1V7GggagKiET2ldmM5zYWAsYIc=" alt="" />
                <div className='h-96 flex justify-center items-center text-center'>
                    <div>
                        <h1 className='text-4xl text-green-500'>Live, taste, enjoy
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
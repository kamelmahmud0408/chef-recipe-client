import React from 'react';
import Banner from '../sheared/banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCart from './ChefCart';



const Home = () => {
    const chefData=useLoaderData()
    console.log(chefData)  
   
    return (
        <div className='bg-gray-200'>
            <Banner></Banner>
            <div className='grid lg:grid-cols-3 gap-5 mt-10 container mx-auto'>
                {
                    chefData.map(chef => <ChefCart chef={chef} key={chef.id}></ChefCart>)
                }
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {  HandThumbUpIcon } from '@heroicons/react/24/solid'
import Racipe from './Recipe'

const ChefDetails = () => {
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    const { description, experience, img_url, name, likes, number_of_recipes, recipes } = chefDetails;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-md mt-10 container mx-auto">
                <figure><img className='w-full' src={img_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <hr />
                    <div className='flex justify-between'>
                        <div >
                            <p> Experience:  {experience}</p>
                            <p>Number of recipes: {number_of_recipes}</p>
                        </div>
                        <div>
                            <p className='flex'> <HandThumbUpIcon className="h-6 w-6 text-blue-500 me-2" /><span>{likes}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <section className='container mx-auto grid lg:grid-cols-3'>
                {
                    recipes.map(recipe => <Racipe recipe={recipe}></Racipe>)
                }
            </section>
        </div>
    );
};

export default ChefDetails;
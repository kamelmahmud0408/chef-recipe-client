import React from 'react';
import {  HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const ChefCart = ({ chef }) => {
    const {id, description, experience, img_url, name, number_of_recipes, likes } = chef;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow">
                <LazyLoad height={250} offset={9000} threshold={0.95}>
                <figure><img className='w-full h-64' src={img_url} alt="Shoes" /></figure>
                </LazyLoad>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className='flex justify-between'>
                        <div >
                            <p> Experience:  {experience}</p>
                            <p>Number of recipes: {number_of_recipes}</p>
                        </div>
                        <div>
                            <p className='flex'> <HandThumbUpIcon className="h-6 w-6 text-blue-500 me-2" /><span>{likes}</span></p>
                        </div>
                    </div>
                    <div className=" w-full mt-5">
                       <Link to = {`/chefdetails/${id}`}><button className='btn btn-primary w-full'>View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCart;
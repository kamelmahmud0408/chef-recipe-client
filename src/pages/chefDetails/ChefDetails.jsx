import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import Racipe from './Recipe'
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from '@mui/material';


const ChefDetails = () => {
    const [isFetching, setIsFetching] = useState(true);
    const chefDetails = useLoaderData()

    // loading spinner code

    useEffect(() => {

        setTimeout(function () {
            setIsFetching(false);
        }, 1000);
    }, []);

    const { id, description, experience, img_url, name, likes, number_of_recipes, recipes } = chefDetails;
    return (
        <div>
            {
                isFetching ? <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box> : <div>
                    <div className="card w-full bg-base-100 shadow-md mt-10 container mx-auto">
                        <figure><img className='w-full' src={img_url} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{name}</h2>
                            <p>{description}</p>
                            <hr />
                            <div className='flex justify-between'>
                                <div >
                                    <p className='font-semibold'> Experience:  {experience}</p>
                                    <p className='font-semibold'>Number of recipes: {number_of_recipes}</p>
                                </div>
                                <div>
                                    <p className='flex'> <HandThumbUpIcon className="h-6 w-6 text-blue-500 me-2" /><span>{likes}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* recipes section */}
                    <section className='container mx-auto '>
                        <div className='text-center '>
                        <h1 className='text-4xl text-blue-600  pt-10 font-bold '> Recipes</h1>
                        <p className='mt-3'>Some of our our chefs delicious recipes are mentioned below along with their ingredients and cooking method, <br /> hope you like it,enjoy and be well</p>
                        </div>
                        
                        <div className='grid lg:grid-cols-3'>
                        {
                            recipes.map(recipe => <Racipe key={recipe._id} recipe={recipe}></Racipe>)
                        }
                        </div>
                    </section>
                </div>
            }

        </div>
    );
};

export default ChefDetails;
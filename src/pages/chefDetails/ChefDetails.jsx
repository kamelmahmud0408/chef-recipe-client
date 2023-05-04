import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import Racipe from './Recipe'
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from '@mui/material';


const ChefDetails = () => {
    const [isFetching, setIsFetching] = useState(true);
    const chefDetails = useLoaderData()

    useEffect(() => {

        setTimeout(function () {
            console.log("Delayed for 5 second.");
            setIsFetching(false);
        }, 1000);
    }, []);

    console.log(chefDetails)
    const { description, experience, img_url, name, likes, number_of_recipes, recipes } = chefDetails;
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
                    <section className='container mx-auto grid lg:grid-cols-3'>
                        {
                            recipes.map(recipe => <Racipe key={recipe._id} recipe={recipe}></Racipe>)
                        }
                    </section>
                </div>
            }

        </div>
    );
};

export default ChefDetails;
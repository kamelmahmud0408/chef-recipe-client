import React, { useEffect, useState } from 'react';
import Banner from '../sheared/banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCart from './ChefCart';
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from '@mui/material';


const Home = () => {


    const [isFetching, setIsFetching] = useState(true);
    const chefData = useLoaderData()
    useEffect(() => {

        setTimeout(function () {
           
            setIsFetching(false);
        }, 1000);
    }, []);

     return (
            <div className=''>
                <Banner></Banner>
                {
                    isFetching ? <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress />
                        </Box> :
                        <section>
                            <h1 className='text-4xl text-blue-600 font-bold text-center p-5'> Our Honorable Chefs</h1>
                            <div className='grid lg:grid-cols-3 gap-5 mt-10 container mx-auto'>
                            {
                                chefData.map(chef => <ChefCart chef={chef} key={chef.id}></ChefCart>)
                            }
                        </div>
                        </section>
                }
                <section className='container mx-auto'>
                    <div className='text-center p-20'>
                        <h1 className='text-4xl text-blue-600 font-bold mb-3'>
                            Our Most Selected Menu
                        </h1>
                        <p>
                            Excellent! Got a Murgh Biryani and it tasted just perfect. You can taste the different flavours, rice cooked to perfection and the chicken succulent.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-3 gap-8'>
                        <div className="card w-full bg-base-100 shadow">
                            <figure><img className='w-full h-80' src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Chicken Biriyani</h2>
                                <p>Excellent! Got a Murgh Biryani and it tasted just perfect. You can taste the different flavours, rice cooked to perfection and the chicken succulent. Huge portion and nicely priced. Definitely the best bangladeshi in the Sudbury area I have tried so far. 100% better than the one at 621 Boston Post Rd - that place is a roadside dhaba! Keep it up Soul of Bangladesh.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow">
                            <figure><img className='w-full h-80' src="https://static.wixstatic.com/media/a27d24_141d8acd77844219820daf141c1d3058~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a27d24_141d8acd77844219820daf141c1d3058~mv2.jpg" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Fuchka</h2>
                                <p>Excellent! Got a fuchka and it tasted just perfect. You can taste the different flavours, rice cooked to perfection and the chicken succulent. Huge portion and nicely priced. Definitely the best bangladeshi in the Sudbury area I have tried so far. 100% better than the one at 621 Boston Post Rd - that place is a roadside dhaba! Keep it up Soul of India.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full bg-base-100 shadow">
                            <figure><img className='w-full h-80' src="https://images.deliveryhero.io/image/fd-bd/LH/f40s-hero.jpg" alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Chicken Biriyani</h2>
                                <p>Excellent! Got a Murgh Biryani and it tasted just perfect. You can taste the different flavours, rice cooked to perfection and the chicken succulent. Huge portion and nicely priced. Definitely the best bangladeshi in the Sudbury area I have tried so far. 100% better than the one at 621 Boston Post Rd - that place is a roadside dhaba! Keep it up Soul of India.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='container mx-auto p-20 '>
                    <h1 className='text-4xl text-blue-600 text-center  pt-10  '>About Us</h1>
                    <div className='  '>
                        <p className='text-xl mt-5 leading-9 '>Launched in 2014, ChefZone was founded with the goal of revolutionizing Hawaii’s foodservice industry. Harnessing the buying power of our parent company  and our partnership with the International Marketing Alliance (IMA), ChefZone offers thousands of unique local and national products many of which are available nowhere else in Hawaii.
                            Our wholesale club contains over 5,000 food and restaurant supply essentials in our 45,000-square-foot facility. Members also have access to our demonstration kitchen and catering concepts showroom.</p>
                    </div>
                </section>

            </div>
        );
     };


export default Home;
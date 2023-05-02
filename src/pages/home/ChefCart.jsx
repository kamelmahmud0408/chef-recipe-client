import React from 'react';

const ChefCart = ({ chef }) => {
    const { description, experience, img_url, name, recipes, likes } = chef;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-64' src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}  
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{likes}</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCart;
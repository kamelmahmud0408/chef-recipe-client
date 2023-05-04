
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipe = ({ recipe }) => {

  const [massege, setmassege] = useState('')
  const { recipe_name, rating, ingredients, cooking_method } = recipe;

  const handleFavourite = (event) => {
    event.currentTarget.disabled = true;
    toast("add to faovorite!")

  }

  return (
    <div className='my-10 '>
      <div className="card w-full h-full bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title font-bold">{recipe_name}</h2>
          <div>
            <h1 className='text-xl font-semibold '>Ingradients</h1>
            <div className='grid grid-cols-2 mt-3'>
              {
                ingredients.map(i => <li>{i}</li>)
              }
            </div>
          </div>
          <h1 className='text-xl font-semibold'>Cooking Method</h1>
          <div >
            {
              cooking_method.map(m => <li>{m}</li>)
            }
          </div>
         
            <div className='flex gap-2 mt-5'>
            <p> Rating: {rating}</p>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
            <div  >
              <input name='massege' value={massege} type="text" onChange={event => setmassege(event.target.value)} />
              <button onClick={handleFavourite} className='btn btn-primary w-full'>favourite</button>
              <ToastContainer />
            </div>
      
        </div>
      </div>
    </div>
  );
};

export default Recipe;
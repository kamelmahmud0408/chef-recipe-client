import { LifebuoyIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {


  const [massege, setmassege] = useState('')
  console.log(recipe)
  const { recipe_name, rating, ingredients, cooking_method } = recipe;

  const handleFavourite = (event) => {
    event.currentTarget.disabled = true;
    toast("add to faovorite!")


  }

  return (
    <div className='my-10 '>
      <div className="card w-full h-full bg-base-100 shadow-xl ">
        <div className="card-body ">
          <h2 className="card-title">{recipe_name}</h2>
          <div className='grid grid-cols-2'>
            {
              ingredients.map(i => <li>{i}</li>)
            }
          </div>
          <h1>Cooking Method</h1>
          <div >
            {
              cooking_method.map(m => <li>{m}</li>)
            }
          </div>
          <div className='flex justify-between items-center mt-10 '>
            <p> Rating: {rating}</p>
            <div  >
              <input name='massege' value={massege} type="text" onChange={event => setmassege(event.target.value)} />
              <button onClick={handleFavourite} className='btn btn-primary '>favourite</button>
              <ToastContainer />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Recipe;
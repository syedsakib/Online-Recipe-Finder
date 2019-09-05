import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = props => {
  return (
    <div className='container'>
      <div className='row'>
        {props.recipes.map(recipe => {
          return (
            <div className='col-md-4' key={recipe.recipe_id}>
              <div className='card recipes__box'>
                <img
                  className='card-img-top recipe__box-img'
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className='card-body recipe__text'>
                  <h5 className='card-title recipes__title'>
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)} ...`}
                  </h5>
                  <p className='recipes__subtitle'>
                    Publisher:<span>{recipe.publisher}</span>
                  </p>
                </div>

                <div className='card-body text-center recipe_buttons'>
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title }
                    }}
                    className='btn recipe_buttons '
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;

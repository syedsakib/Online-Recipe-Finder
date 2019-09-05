import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '78076d3f2a9ab7c975685b695642b971';

class Recipe extends Component {
  state = { activeRecipe: [] };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className='container mt-5'>
        {this.state.activeRecipe.length !== 0 && (
          <div className='active-recipe'>
            <img
              className='active-recipe__img'
              src={recipe.image_url}
              alt='recipe.title'
            />
            <h3 className='active-recipe__title'>{recipe.title}</h3>
            <h4 className='active-recipe__publisher'>
              Publisher:<span>{recipe.publisher}</span>
            </h4>
            <p className='active-recipe__website'>
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className='active-recipe__button'>
              <Link to='/'>Go Back</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;

import React from 'react';
import { Recipe } from './Recipe';

function Menu(props) {

  const recipes = props.recipes;

  return (
    <React.Fragment>
      <div className='content-wrap'>

        {recipes.map((recipe, i) => {
          return (
            <Recipe key={i} title={recipe.title} image={recipe.image} />
          )
        })}

      </div>

    </React.Fragment>

  );
}

export { Menu };
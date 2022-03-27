import React from 'react';
import { Recipe } from './Recipe';

function Menu(props) {

  const recipes = props.recipes;

  return (
    <React.Fragment>
      <div>
        <h1 className='titleScreen'>Platos </h1>
      </div>
      <div className='content-wrap'>

        {recipes.map((recipe, i) => {
          return (
            <Recipe
              key={i}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              summary={recipe.summary}
              vegan={recipe.vegan}
              pricePerServing={recipe.pricePerServing}
              readyInMinutes={recipe.readyInMinutes}
              healthScore={recipe.healthScore}
              showAddButton={false}
              showDeleteButton={true}
              onDeleteClick={(id) => { props.onDeleteRecipe(id) }}
            />
          )
        })}

      </div>

    </React.Fragment>

  );
}

export { Menu };
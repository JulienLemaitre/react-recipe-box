import React from 'react';
import IngredientsList from './ingredients-list';

const RecipesList = (props) => {

  const recipesList = props.list.map((recipe, index) => {
    return (
      <li key={index}>
        <div className="title">{recipe.title}</div>
        <IngredientsList list={recipe.ingredients.split(",")} />
      </li>
    )
  });

  return (
    <ul className="recipes">
      {recipesList}
    </ul>
  );

};

export default RecipesList;
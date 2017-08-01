import React from 'react';

const IngredientsList = ( { list }) => {

  const ingredientsList = list.map((ingredient, index) => {
    return (
      <div className="ingredient" key={index}>{ingredient}</div>
    );
  });

  return (
    <div className="ingredients">
      {ingredientsList}
    </div>
  );
};

export default IngredientsList;
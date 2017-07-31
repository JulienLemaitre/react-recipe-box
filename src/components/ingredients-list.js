import React from 'react';

const IngredientsList = ( { list }) => {

  const ingredientsList = list.map((ingredient) => {
    return (
      <div className="ingredient">{ingredient}</div>
    );
  });

  return (
    <div className="ingredients">
      {ingredientsList}
    </div>
  );
};

export default IngredientsList;
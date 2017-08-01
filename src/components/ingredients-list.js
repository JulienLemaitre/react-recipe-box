import React from 'react';

const IngredientsList = ( { list }) => {

  const ingredientsList = list.map((ingredient, index) => {
    return (
      <li className="list-group-item" key={index}>{ingredient}</li>
    );
  });

  return (
      <ul className="list-group">
        {ingredientsList}
      </ul>
  );
};

export default IngredientsList;
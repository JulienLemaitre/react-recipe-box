import React from 'react';

const IngredientsList = ( { list, index, editRecipe, deleteRecipe }) => {

  const ingredientsList = list.map((ingredient, index) => {
    return (
      <li className="list-group-item" key={index}>{ingredient}</li>
    );
  });

  return (
    <div className="panel-body">
      <h5>Ingredients</h5>
      <ul className="list-group">
        {ingredientsList}
      </ul>
      <p>
        <button type="button" className="btn btn-primary" onClick={editRecipe}>Edit</button>
        <button type="button" className="btn btn-danger" onClick={deleteRecipe}>Delete</button>
      </p>
    </div>
  );
};

export default IngredientsList;
import React from 'react';

const IngredientsList = ( { list, editRecipe, deleteRecipe }) => {

  const ingredientsList = list.map((ingredient, index) => {
    return (
      <li className="ingredient" key={index}>{ingredient}</li>
    );
  });

  return (
    <div className="panel-body">
      <h3>Ingredients</h3>
      <ul className="list-inline">
        {ingredientsList}
      </ul>
      <p className="buttons">
        <button type="button" className="btn btn-primary btn-edit" onClick={editRecipe}>Edit</button>
        <button type="button" className="btn btn-danger" onClick={deleteRecipe}>Delete</button>
      </p>
    </div>
  );
};

export default IngredientsList;
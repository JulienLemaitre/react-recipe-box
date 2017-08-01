import React from 'react';
import IngredientsList from './ingredients-list';

const RecipesList = (props) => {

  const recipesList = props.list.map((recipe, index) => {
    return (
      <div className="panel panel-default" key={index}>
        <div className="panel-heading" role="tab" id={`heading${index}`}>
          <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${index}`} aria-expanded="true" aria-controls={`#collapse${index}`}>
            <h4 className="panel-title">{recipe.title}</h4>
          </a>
        </div>
        <div id={`collapse${index}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${index}`}>
          <IngredientsList
            list={recipe.ingredients.split(",")}
            index={index}
            editRecipe={props.editRecipe(index)}
            deleteRecipe={props.deleteRecipe(index)}
          />
        </div>
      </div>
    )
  });

  return (
    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      {recipesList}
    </div>
  );

};

export default RecipesList;
import React from "react";
import "./Recipes.css";

const Recipes = (props) => {
  return (
    <div>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <img src={recipe.image} className="recipe__image"></img>
          <div className="recipe__text-wrapper">
            <div className="recipe__title">{recipe.title}</div>
            <div className="recipe__serving">
              Serving size: {recipe.servings}
            </div>
            <div className="recipe__time">
              Ready in {recipe.readyInMinutes} minutes
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

import React, { useState } from "react";
import "./Recipes.css";
import ToggleLikeButton from "./ToggleLikeButton";
import ReadMore from "./ReadMore";

const Recipes = (props) => {
  return (
    <div>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
          <ToggleLikeButton />
          <img
            src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
            className="recipe__image"
          ></img>
          <div className="recipe__text-wrapper">
            <div className="recipe__title">{recipe.title}</div>
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

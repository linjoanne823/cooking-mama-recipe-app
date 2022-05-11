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
          <img src={recipe.image} className="recipe__image"></img>
          <div className="recipe__text-wrapper">
            <div className="recipe__title">{recipe.title}</div>
            <div className="recipe__serving">
              Serving size: {recipe.servings}
            </div>
            <div className="recipe__time">
              Ready in {recipe.readyInMinutes} minutes
            </div>
            <ReadMore>
              <div className="recipe__summary">{recipe.summary}</div>
            </ReadMore>

           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

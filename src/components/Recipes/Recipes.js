import React from "react";
import "./Recipes.css";
import RecipeSummary from "./RecipeSummary";
import likeButton from "../../assets/images/heart-992.svg";
import ToggleLikeButton from "./ToggleLikeButton";

const Recipes = (props) => {
  return (
    <div>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipe">
            <ToggleLikeButton/>
          <img src={recipe.image} className="recipe__image"></img>
          <div className="recipe__text-wrapper">
            <div className="recipe__title">{recipe.title}</div>
            <div className="recipe__serving">
              Serving size: {recipe.servings}
            </div>
            <div className="recipe__time">
              Ready in {recipe.readyInMinutes} minutes
            </div>

            <button className ="recipe__button"><a href={recipe.sourceUrl}className="recipe__link" >
              More
            </a></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

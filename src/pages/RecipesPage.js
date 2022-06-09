import axios from "axios";
import React, { useState } from "react";
import Recipes from "../components/Recipes/Recipes";
import "./RecipesPage.scss";

const RecipesPage = (props) => {
  const [cuisine, setCuisine] = useState("japanese");
  const [recipes, setRecipes] = useState([]);

  const urlForQuery = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=${process.env.REACT_APP_API_KEY}`;
  const getRecipesByQuery = async () => {
    try {
      const result = await axios.get(urlForQuery);
      setRecipes(result.data.results);
      console.log(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitQuery = (e) => {
    e.preventDefault();
    getRecipesByQuery();
  };

  return (
    <div className="recipe-page">
      <h1 className="recipe-page__title">Recipe Feed</h1>
      <form onSubmit={onSubmitQuery} className="recipe-page__form">
        <select
          className="custom-select"
          onChange={(e) => setCuisine(e.target.value)}
        >
          <option value="japanese">Japanese</option>
          <option value="korean">Korean</option>
          <option value="chinese">Chinese</option>
          <option value="american">American</option>
          <option value="italian">Italian</option>
        </select>
        {/* <input className="recipe-page__input-field"
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        ></input> */}
        <input
          type="submit"
          value="Search"
          className="recipe-page__submit"
        ></input>
      </form>
      <div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default RecipesPage;

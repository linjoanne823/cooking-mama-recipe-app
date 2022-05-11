import axios from "axios";
import React, { useState } from "react";
import Recipes from "../components/Recipes/Recipes";
import './RecipesPage.css';

const RecipesPage = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const API_KEY = "4c58e90e3834404faa86be96b25aedc0";

  const urlForQuery = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`;

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
      <h1>Recipe Feed</h1>
      <form onSubmit={onSubmitQuery} className="recipe-page__form">
        <input className="recipe-page__input-field"
          type="text"
          placeholder="enter name of dish"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <input type="submit" value="Search" className="recipe-page__submit"></input>
    
      </form>
      <div>
        <Recipes recipes={recipes}/>
      </div>
    </div>
  );
};

export default RecipesPage;

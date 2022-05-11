import axios from "axios";
import React, { useState } from "react";
import Recipes from "../components/Recipes/Recipes";

const RecipesPage = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const API_KEY = "4c58e90e3834404faa86be96b25aedc0";

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`;

  const getRecipes = async () => {
    try {
      const result = await axios.get(url);
      setRecipes(result.data.results);
      console.log(result.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="recipe-page">
      <h1>Recipe Feed</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="enter name of dish"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <input type="submit" value="Search"></input>
        {/* <select className="recipe-page__diet">
          <option onClick={() => setDiet('ketogenic')}>Ketogenic</option>
          <option onClick={() => setDiet('vegetarian')}>Vegetarian</option>
          <option onClick={() => setDiet('vegan')}>Vegan</option>
        </select> */}
      </form>
      <div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

export default RecipesPage;

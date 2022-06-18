import axios from "axios";
import React, { useState, useEffect } from "react";
import Recipes from "../components/Recipes/Recipes";
import "./RecipesPage.scss";

const RecipesPage = (props) => {
  const [cuisine, setCuisine] = useState("jewish");
  const [recipes, setRecipes] = useState([]);
  //call in useEffect

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

  useEffect(() => {
    getRecipesByQuery();
  }, [cuisine]);

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
          <option value="jewish">Jewish</option>
          <option value="korean">Korean</option>
          <option value="chinese">Chinese</option>
          <option value="american">American</option>
          <option value="italian">Italian</option>
        </select>
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

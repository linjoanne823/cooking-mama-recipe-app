import React, { useState } from "react";
import Recipes from "../components/Recipes/Recipes";
import RecipeSummary from "../components/Recipes/RecipeSummary";
const recipesArray = [
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    readyInMinutes: 45,
    servings: 2,
    sourceUrl:
      "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    openLicense: 2,
    image:
      "https://4.bp.blogspot.com/-mhULYfIdIiM/T-kLTNS24LI/AAAAAAAAB08/dcFsoqM3e-8/s640/IMG_5400.JPG",
  },

  {
    id: 634873,
    title: "Best Baked Macaroni and Cheese",
    readyInMinutes: 45,
    servings: 12,
    sourceUrl:
      "http://www.foodista.com/recipe/H3FCFX57/best-baked-macaroni-and-cheese",
    openLicense: 2,
    image:
      "http://cloud.foodista.com/content/images/486abc250a17548a8c2fe6dda1eec18268ffa7c1_607x400.jpg",
  },
  {
    id: 660382,
    title: "Smoked Salmon Pasta",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl: "http://www.foodista.com/recipe/YFCWP7PB/smoked-salmon-pasta",
    openLicense: 2,
    image:
      "http://cloud.foodista.com/content/images/2eee73718a67985398faa81b05548250805cc2eb_607x400.jpg",
  },
];

const recipeSummaryArray = [
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    summary:
      'You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try.',
  },
  {
    id: 634873,
    title: "Best Baked Macaroni and Cheese",
    summary:
      'Forget going out to eat or ordering takeout every time you crave American food. Try making Best Baked Macaroni and Cheese at home.',
  },
  {
    id: 660382,
    title: "Smoked Salmon Pasta",
    summary:
      'Smoked Salmon Pastan is a main course that serves 4.',
  },
];

const RecipesPage = () => {
  const [recipes, setRecipes] = useState(recipesArray);
  const [recipeSummary, setRecipeSummary] = useState(recipeSummaryArray)

  return (
    <div className ="recipe-page">
      <h1>Recipe Feed</h1>
      <Recipes recipes={recipes} />
      <RecipeSummary recipeSummary={recipeSummary} className ="recipe-page__summary"/>
     

    </div>
  );
};

export default RecipesPage;

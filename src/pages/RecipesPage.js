import React, { useState } from "react";
import Recipes from "../components/Recipes/Recipes";
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
      "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs requires about 45 minutes from start to finish. This recipe makes 2 servings with 585 calories, 19g of protein, and 20g of fat each. For $1.63 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. If you have butter, cauliflower florets, extra virgin olive oil, and a few other ingredients on hand, you can make it. 209 people have made this recipe and would make it again. It works well as a main course. It is brought to you by fullbellysisters.blogspot.com. With a spoonacular score of 83%, this dish is excellent.",
  },
  {
    id: 634873,
    title: "Best Baked Macaroni and Cheese",
    summary:
      "You can never have too many American recipes, so give Best Baked Macaroni and Cheese a try. This recipe makes 12 servings with 579 calories, 26g of protein, and 33g of fat each. For $1.76 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. A couple people made this recipe, and 80 would say it hit the spot. It works best as a main course, and is done in roughly 45 minutes. It is brought to you by Foodista. Head to the store and pick up kosher salt, white cheddar cheese, elbow macaroni, and a few other things to make it today.",
  },
  {
    id: 660382,
    title: "Smoked Salmon Pasta",
    summary: "Smoked Salmon Pastan is a main course that serves 4.",
  },
];

const mergeArrays = (recipesArray = [], recipeSummaryArray = []) => {
  let result = [];
  result = recipesArray.map((object) => {
    const index = recipeSummaryArray.findIndex(
      (el) => el["id"] === object["id"]
    );
    const { summary } = index !== -1 ? recipeSummaryArray[index] : {};
    return {
      ...object,
      summary,
    };
  });
  return result;
};

const RecipesPage = () => {
  console.log(mergeArrays(recipesArray, recipeSummaryArray));
  const [recipes, setRecipes] = useState(
    mergeArrays(recipesArray, recipeSummaryArray)
  );

  return (
    <div className="recipe-page">
      <h1>Recipe Feed</h1>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default RecipesPage;

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
      'You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. This recipe serves 2 and costs $1.63 per serving. One portion of this dish contains around <b>19g of protein</b>, <b>20g of fat</b>, and a total of <b>585 calories</b>. 209 people were impressed by this recipe. This recipe from fullbellysisters.blogspot.com requires butter, scallions, salt and pepper, and extra virgin olive oil. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 83%</b>, this dish is tremendous. <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229673">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230045">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a> are very similar to this recipe.',
  },
  {
    id: 634873,
    title: "Best Baked Macaroni and Cheese",
    summary:
      'Forget going out to eat or ordering takeout every time you crave American food. Try making Best Baked Macaroni and Cheese at home. This recipe makes 12 servings with <b>579 calories</b>, <b>26g of protein</b>, and <b>33g of fat</b> each. For <b>$1.76 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately <b>45 minutes</b>. This recipe is liked by 80 foodies and cooks. Head to the store and pick up whole milk, white bread, elbow macaroni, and a few other things to make it today. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 61%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/baked-macaroni-and-cheese-303824">Baked Macaroni and Cheese</a>, <a href="https://spoonacular.com/recipes/baked-macaroni-and-cheese-550119">Baked Macaroni and Cheese</a>, and <a href="https://spoonacular.com/recipes/best-baked-macaroni-and-cheese-1614059">Best Baked Macaroni and Cheese</a> for similar recipes.',
  },
  {
    id: 660382,
    title: "Smoked Salmon Pasta",
    summary:
      'Smoked Salmon Pastan is a main course that serves 4. One serving contains <b>472 calories</b>, <b>22g of protein</b>, and <b>22g of fat</b>. For <b>$2.96 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. A mixture of smoked salmon, milk, parmesan cheese, and a handful of other ingredients are all it takes to make this recipe so tasty. This recipe is liked by 33 foodies and cooks. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you\'re following a <b>pescatarian</b> diet. With a spoonacular <b>score of 66%</b>, this dish is good. Try <a href="https://spoonacular.com/recipes/smoked-salmon-pasta-87836">Smoked Salmon Pasta</a>, <a href="https://spoonacular.com/recipes/pasta-with-smoked-salmon-270708">Pasta with Smoked Salmon</a>, and <a href="https://spoonacular.com/recipes/smoked-salmon-pasta-247226">Smoked Salmon Pasta</a> for similar recipes.',
  },
];

const RecipesPage = () => {
  const [recipes, setRecipes] = useState(recipesArray);

  return (
    <div>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default RecipesPage;

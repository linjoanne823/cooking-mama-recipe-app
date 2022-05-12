// import React, { useState, useEffect } from "react";
// import Recipes from "./Recipes";
// import { Link, useParams } from "react-router-dom";

// const RecipeDetails = (p) => {
//     let params = useParams();
//   const [details, setDetails] = useState({});
//   const fetchDetails = async () => {
//     try {
//       const data = await fetch(
//         `https://api.spoonacular.com/recipes/${params.name}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
//       );
//       const detailData = await data.json();
//       setDetails(detailData);
//       console.log(detailData);
// 
//     }
//   };

//   useEffect(()=>{
//       fetchDetails();
//   },[params.name]);

// //   const onClickQuery = (e) => {
// //     e.preventDefault();
// //     fetchDetails();

// //   };

//   return (
//       <div>
//           <button onClick = {detail}>Recipe Details</button>
//       </div>
//   );
// };

// export default RecipeDetails;

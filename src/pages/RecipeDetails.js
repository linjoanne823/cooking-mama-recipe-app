import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = (props) => {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await axios.get(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    setDetails(data);
    console.log(details);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return <div>{details.data.title}</div>;
};

export default RecipeDetails;

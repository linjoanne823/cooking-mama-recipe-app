import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Info } from "react";

const RecipeDetails = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("ingredients");

  const fetchDetails = async () => {
    try {
      const data = await axios.get(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setDetails(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return Object.keys(details).length > 0 ? (
    <div>
      <h2>{details.data.title}</h2>
      <img src={details.data.image}></img>
      <p dangerouslySetInnerHTML={{ __html: details.data.instructions }}></p>
      <button>Save to Favourite</button>
    </div>
  ) : (
    <p>loading</p>
  );
};

export default RecipeDetails;

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.scss";

const RecipeDetails = () => {
  let params = useParams();
  const [details, setDetails] = useState({});

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

  const navigate = useNavigate();

  return Object.keys(details).length > 0 ? (
    <div className="recipe-details">
      <h2 className="recipe-details__title">{details.data.title}</h2>
      <img src={details.data.image} className="recipe-details__image"></img>
      <p
        dangerouslySetInnerHTML={{ __html: details.data.instructions }}
        className="recipe-details__text"
      ></p>
      <button onClick={() => navigate(-1)} className="recipe-details__button">
        Back to List
      </button>
    </div>
  ) : (
    <p>loading</p>
  );
};

export default RecipeDetails;

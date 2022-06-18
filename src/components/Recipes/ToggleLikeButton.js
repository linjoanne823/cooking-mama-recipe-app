import React, { useState } from "react";
import likeButton from "../../assets/images/heart-992.svg";
import whiteLikeButton from "../../assets/images/heart-917.svg";
import "./ToggleLikeButton.scss";

const ToggleLikeButton = () => {
  const [toggled, setToggled] = useState(true);

  const toggleImage = () => setToggled(!toggled);

  return (
    <div onClick={toggleImage}>
      {toggled && <img src={whiteLikeButton} className="toggle-button" />}
      {!toggled && <img src={likeButton} className="toggle-button" />}
    </div>
  );
};

export default ToggleLikeButton;

import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const [isReadMore, setReadMore] = useState(false);
  const toggleReadMoreShowLess = () => {
    setReadMore((prevState) => !prevState);
  };

  // function toggleIsClipped(){
  //     setIsClipped(!isClipped)
  // }

  return (
    <div>
      {isReadMore ? children : children.toString().substring(0,100)}
      <button onClick={toggleReadMoreShowLess}>
        {isReadMore ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;

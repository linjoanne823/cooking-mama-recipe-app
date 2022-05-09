import React, { useState, useEffect } from "react";
import "../Modal/Modal.css"

const SignUpForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal__content" >
        <label className="modal__list">
          Your Name:
          <input
        
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="modal__list">
          Your Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <input type="submit" className="modal__button"/>
      </form>
    </div>
  );
};

export default SignUpForm;

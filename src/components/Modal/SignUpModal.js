import React from "react";
import { useState } from "react";
import Modal from "react-modal";

const SignUpModal = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Modal isOpen={true} className="modal">
      <form onSubmit={handleSubmit} className="modal__content">
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

        <button className="modal__button">Submit</button>
      </form>
    </Modal>
  );
};

export default SignUpModal;

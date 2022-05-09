import React from "react";
import {Link} from "react-router-dom";
import "../Modal/Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <ul className="modal__list">
          <li className="modal__list-item">Sign In / Log Out</li>
          <li className="modal__list-item"><Link to ="/signup">Sign Up</Link></li>
          <li className="modal__list-item">Test User</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Modal.scss";

const userModal = (props) => {
  return (
    <div>
      <Modal isOpen={true} className="modal">
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <ul className="modal__list">
            <li className="modal__list-item">
              <Link to="/recipes" className="modal__link">
                Test User
              </Link>
            </li>
          </ul>
          <button
            onClick={() => props.closeModal(false)}
            className="modal__button"
          >
            Back
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default userModal;

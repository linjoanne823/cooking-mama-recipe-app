import React, { useState } from "react";
import userIcon from "../../assets/images/profile.icon.png";
import "./Header.css";
import Modal from "../Modal/Modal";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <img
        src={userIcon}
        className="header__user-icon"
        onClick={() => setShow(true)}
      />

      <Modal show={show} onClose={()=>setShow(false)}/>
    </div>
  );
};

export default Header;

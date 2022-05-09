import React from "react";
import userIcon from "../../assets/images/profile.icon.png"
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
          <img src={userIcon} className="header__user-icon" />
    
      </div>
    );
  }
}

export default Header;

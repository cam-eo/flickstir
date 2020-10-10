import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__item">
          <SettingsIcon fontSize="" className="header__settingsIcon" />
        </div>
        <div className="header__item">
          <img src={logo} alt="" />
        </div>
        <div className="header__item">
          <PersonIcon fontSize="" className="header__personIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Header.css";
import logo from "./images/logo.png";
import SettingsIcon from "@material-ui/icons/Settings";
import PersonIcon from "@material-ui/icons/Person";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__item">
          <SettingsIcon fontSize="large" className="header__settingsIcon" />
        </div>
        <div className="header__item">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__item">
          <PersonIcon fontSize="large" className="header__personIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;

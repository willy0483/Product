import React from "react";
import { HeaderStyled } from "./Header.Styled";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export const Header = ({ toggleMenu, isOpen }) => {
  return (
    <HeaderStyled>
      <Link to={"/"}>
      <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </div>
    </HeaderStyled>
  );
};
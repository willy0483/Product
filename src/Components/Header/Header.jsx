import React from "react";
import { HeaderStyled } from "./Header.Styled";
import logo from "../../Assets/logo.png";

export const Header = ({ toggleMenu, isOpen }) => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Logo" className="logo" />
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? "✕" : "☰"}
      </div>
    </HeaderStyled>
  );
};
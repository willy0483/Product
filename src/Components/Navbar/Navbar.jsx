import React from "react";
import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";

export const Navbar = ({ isOpen }) => {
  return (
    <NavbarStyled isOpen={isOpen}>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About us</NavLink>
        </li>
        <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};
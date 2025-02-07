import styled from "styled-components";

export const NavbarStyled = styled.nav`
  grid-area: navbar;
  display: flex;
  align-items: center;
  justify-content: center;

  .burger-menu {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
  ul {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #444;
    margin-top: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 98px; /* Adjust based on your header height */
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;

    li {
      display: flex;
      margin: 0.5rem 0;
      text-align: center;
      align-items: center;
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.color.primary};
      }

      &.active {
        font-weight: 600;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    flex-direction: row;
    align-items: center;


    .burger-menu {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      width: auto;
      background-color: transparent;
      margin-top: 0;
      position: static;

      li {
        margin: 0 1rem;
        text-align: left;
      }
    }
  }


  @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.s}) {
    background-color: ${(props) => props.theme.color.background};
  }



`;
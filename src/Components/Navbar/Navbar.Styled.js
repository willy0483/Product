import styled from "styled-components";

export const NavbarStyled = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => props.theme.color.background};

  .burger-menu {
    display: none;
    font-size: 30px;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  ul li {
    display: inline;
  }

  @media (max-width: 768px) {
    .burger-menu {
      display: block;
    }

    ul {
      display: none;
      flex-direction: column;
      gap: 10px;
    }

    ul.open {
      display: flex;
    }
  }
`;

import styled from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.background};
  img {
    width: 100%;
    max-width: 200px;
    max-height: 70px;
    padding: 10px 0;
  }
`;

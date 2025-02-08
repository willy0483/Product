import styled from "styled-components";

export const HeroStyled = styled.section`
  position: relative;
`;

export const HeroContent = styled.div`

  font-family: "Cormorant Garamond", serif;
  color: ${(props) => props.theme.color.white};



  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  z-index: 2;

`;



export const HeroImage = styled.div`
  position: relative;
  img {
    width: 100%;
    max-height: calc(100vh - 55px);
    height: auto;
    display: block;
    object-fit: cover;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #242424 5%, transparent 10%),
    linear-gradient(to right, #242424 2.5%, transparent 5%),
    linear-gradient(to left,  #242424 2.5%, transparent 5%),
    linear-gradient(to bottom , #242424 5%, transparent 10%);

    z-index: 1;
  }
  img {
    position: relative;
    z-index: 0;
  }
`;
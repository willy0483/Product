import { HeroStyled,HeroImage,HeroContent } from "./Hero.Styled";

// import crow from "../../Assets/etienne-assenheimer-ZmUFCLyg1j8-unsplash.jpg"
import crow from "../../Assets/test.jpg"

export const Hero = () => {
    return (
        <HeroStyled>
            <HeroImage>
            <img src={crow} alt="crow" />
            </HeroImage>
            <HeroContent>
                <h3>Where darkness meets destiny. The Crow rises.</h3>
            </HeroContent>
        </HeroStyled>
    )
}
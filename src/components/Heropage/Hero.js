import React from "react";
import { HeroContent, HeroDiv, StyledHero } from "./Hero.Styled";
import { Image, Typography ,MainButton } from "../../App.Styled";
import image from "../../assits/1.png";
function Hero() {
  return (
    <StyledHero>
      <HeroDiv bg="#F2B6BC">
        <HeroContent>
          <h1>Care products for every home.</h1>
          <Typography>
            Keep your everyday style chic and on-trend with our selection of 20+ styles to choose from.
          </Typography>
          <MainButton >See Collections</MainButton>
        </HeroContent>
      </HeroDiv>
      
      <HeroDiv>
        <Image src={image} alt="Error Image" />
      </HeroDiv>
    </StyledHero>
  );
}

export default Hero;
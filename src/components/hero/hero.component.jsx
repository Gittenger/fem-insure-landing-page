import React from "react";

import Container from "../container/container.component";
import InfoBox from "../infoBox/infoBox.component";
import Button from "../Button/Button.component";

import ImageDesk from "../../assets/image-intro-desktop.jpg";
import ImageMobile from "../../assets/image-intro-mobile.jpg";
import PatternLeft from "../../assets/bg-pattern-intro-left-desktop.svg";
import PatternRight from "../../assets/bg-pattern-intro-right-desktop.svg";
import {
  HeroContainer,
  BorderTop,
  TextBoxContainer,
  ImageBox,
  BackgroundImgLeft,
  BackgroundImgRight,
} from "./hero.styles.jsx";

const Hero = () => {
  const isMobile = window.innerWidth <= 500;
  const Image = isMobile ? ImageMobile : ImageDesk;

  return (
    <HeroContainer>
      <Container>
        <TextBoxContainer>
          <BorderTop />
          <InfoBox
            priority="h1"
            title="Humanizing your insurance."
            content="Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected."
            alignment="left"
          />
          <Button content="view plans" type="light" />
        </TextBoxContainer>
        <ImageBox imgUrl={Image}></ImageBox>
      </Container>
      <BackgroundImgLeft imgUrl={PatternLeft} />
      <BackgroundImgRight imgUrl={PatternRight} />
    </HeroContainer>
  );
};

export default Hero;

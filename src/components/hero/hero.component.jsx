import React from "react";

import Container from "../container/container.component";
import InfoBox from "../infoBox/infoBox.component";

import { HeroContainer, TextBoxContainer } from "./hero.styles.jsx";

const Hero = () => (
  <HeroContainer>
    <Container>
      <TextBoxContainer>
        <InfoBox
          priority="h1"
          title="Humanizing your insurance."
          content="Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that's right for you. Ensure you and your loved ones are protected."
          alignment="left"
        />
        <button>View plans</button>
      </TextBoxContainer>
      <div>Image</div>
    </Container>
  </HeroContainer>
);

export default Hero;

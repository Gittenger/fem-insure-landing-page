import React from "react";

import Container from "../container/container.component";
import Button from "../Button/Button.component";

import BgPattern from "../../assets/bg-pattern-how-we-work-desktop.svg";
import { CtaContainer, TitleBox, BackgroundImg } from "./cta.styles.jsx";

const Cta = () => (
  <Container>
    <CtaContainer>
      <TitleBox>
        <h1>Find out more about how we work</h1>
      </TitleBox>
      <Button content="How we work" type="light" />
      <BackgroundImg imgSrc={BgPattern} />
    </CtaContainer>
  </Container>
);

export default Cta;

import React from "react";

import Container from "../container/container.component";
import Button from "../Button/Button.component";

import { CtaContainer, TitleBox } from "./cta.styles.jsx";

const Cta = () => (
  <Container>
    <CtaContainer>
      <TitleBox>
        <h1>Find out more about how we work</h1>
      </TitleBox>
      <Button content="How we work" type="light" />
    </CtaContainer>
  </Container>
);

export default Cta;

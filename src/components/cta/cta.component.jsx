import React from "react";

import Container from "../container/container.component";

import { CtaContainer, TitleBox } from "./cta.styles.jsx";

const Cta = () => (
  <Container>
    <CtaContainer>
      <TitleBox>
        <h1>Find out more about how we work</h1>
      </TitleBox>
      <button>How we work</button>
    </CtaContainer>
  </Container>
);

export default Cta;

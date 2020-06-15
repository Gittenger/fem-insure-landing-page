import React from "react";

import Container from "../container/container.component";
import FeatureBox from "../featureBox/featureBox.component";

import data from "./featuresSection.data";
import {
  FeaturesSectionContainer,
  BorderTop,
  TitleBox,
  FeatureBoxesContainer,
} from "./featuresSection.styles.jsx";

const FeaturesSection = () => (
  <FeaturesSectionContainer>
    <Container>
      <BorderTop />
      <TitleBox>
        <h1>We're different</h1>
      </TitleBox>
      <FeatureBoxesContainer>
        {data.map(({ ...properties }) => (
          <FeatureBox {...properties} />
        ))}
      </FeatureBoxesContainer>
    </Container>
  </FeaturesSectionContainer>
);

export default FeaturesSection;

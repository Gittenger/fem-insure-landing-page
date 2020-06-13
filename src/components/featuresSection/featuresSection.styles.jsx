import styled from "styled-components";

export const FeaturesSectionContainer = styled.div`
  & > div:first-child {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const TitleBox = styled.div`
  width: 30%;

  h1 {
    font-size: 3em;
  }
`;

export const FeatureBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

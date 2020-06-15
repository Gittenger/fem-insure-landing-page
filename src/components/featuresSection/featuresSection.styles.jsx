import styled from "styled-components";

export const FeaturesSectionContainer = styled.div`
  margin-top: 17rem;
  & > div:first-child {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const BorderTop = styled.div`
  width: 15rem;
  height: 0.2rem;
  background: ${({ theme: { colors } }) => colors.greyViolet};
  margin-bottom: 4rem;
`;

export const TitleBox = styled.div`
  width: 30%;
  margin-bottom: 8rem;

  h1 {
    font-size: 3em;
  }
`;

export const FeatureBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

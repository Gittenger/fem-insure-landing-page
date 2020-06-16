import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobileS } = device;

export const FeaturesSectionContainer = styled.div`
  margin-top: 17rem;
  & > div:first-child {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  @media ${mobileS} {
    margin-top: 5rem;
    ${FlexCenter}

    & > div:first-child {
      align-items: center;
    }
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

  @media ${mobileS} {
    width: 90%;
    text-align: center;
    margin-bottom: 6rem;

    h1 {
      font-size: 2.3em;
    }
  }
`;

export const FeatureBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${mobileS} {
    grid-template-columns: 1fr;
  }
`;

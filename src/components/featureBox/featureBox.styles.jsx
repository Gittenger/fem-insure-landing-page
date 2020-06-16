import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobileS } = device;

export const FeatureBoxContainer = styled.div`
  & > *:last-child p {
    color: ${({ theme: { colors } }) => colors.greyViolet};
  }

  @media ${mobileS} {
    & > *:last-child {
      align-items: center;

      p {
        text-align: center;
      }
    }
  }
`;

export const ImageBox = styled.div`
  @media ${mobileS} {
    ${FlexCenter}
  }
`;

import styled from "styled-components";

import { FlexCenter, device, deviceMin } from "../../style-utils/utils.styles";

const { mobileS } = device;
const { minMobileS } = deviceMin;

export const HeaderMobileContainer = styled.header`
  @media ${minMobileS} {
    display: none;
  }

  @media ${mobileS} {
    display: flex;
  }

  ${FlexCenter}
  width: 100%;

  & > div:first-child {
    ${FlexCenter}
    padding: 2rem 0;

    & > *:first-child {
      margin: 0 auto 0 0;
    }
  }
`;

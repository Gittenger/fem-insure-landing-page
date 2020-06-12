import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const HeroContainer = styled.div`
  ${FlexCenter}
  width: 100%;
  height: 30rem;
  background: ${({ theme: { colors } }) => colors.violetDark};

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const TextBoxContainer = styled.div`
  width: 80%;
  color: ${({ theme: { colors } }) => colors.lightGrey};
  h1 {
    width: 85%;
    font-weight: 400;
    font-size: 3em;
    line-height: 0.9;
    margin-bottom: 2rem;
  }
`;

import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const FooterContainer = styled.footer`
  ${FlexCenter}
  background: ${({ theme: { colors } }) => colors.lightGrey};
  width: 100%;
  padding: 6rem;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;

  & > ul {
    ${FlexCenter}
    justify-content: space-between;
  }
`;

export const FooterBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-transform: uppercase;
  letter-spacing: 2px;

  h6 {
    font-size: 0.8em;
    margin-bottom: 3rem;
    color: ${({ theme: { colors } }) => colors.greyViolet};
  }

  li {
    font-size: 0.8em;
  }
`;

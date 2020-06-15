import styled from "styled-components";

import { FlexCenter } from "../../style-utils/utils.styles";

export const FooterContainer = styled.footer`
  ${FlexCenter}
  background: ${({ theme: { colors } }) => colors.lightGrey};
  width: 100%;
  padding: 6rem;
  position: relative;
  overflow: hidden;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;
  position: relative;
  z-index: 1000;

  & > ul {
    ${FlexCenter}
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 1rem;
    }

    & svg > path {
      transition: fill 0.3s;
    }

    & a:hover svg > path {
      fill: ${({ theme: { colors } }) => colors.violetDarker};
    }
  }
`;

export const FooterBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 1000;

  h6 {
    font-size: 0.8em;
    margin-bottom: 3rem;
    user-select: none;
    color: ${({ theme: { colors } }) => colors.greyViolet};
  }

  li {
    font-size: 0.8em;

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55rem;
  height: 30rem;
  background: ${({ imgSrc }) => `url("${imgSrc}")`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top right;
  z-index: 100;
`;

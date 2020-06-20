import styled from "styled-components";

import { FlexCenter, device } from "../../style-utils/utils.styles";

const { mobileS } = device;

export const HeroContainer = styled.div`
  ${FlexCenter}
  width: 100%;
  height: 55rem;
  background: ${({ theme: { colors } }) => colors.violetDark};
  position: relative;

  & > div:first-child {
    height: 100%;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${mobileS} {
    height: 124rem;
    align-items: flex-start;
    & > div:first-child {
      grid-template-columns: 1fr;
      grid-template-rows: 64rem 60rem;
    }
  }
`;

export const BorderTop = styled.div`
  width: 15rem;
  height: 0.2rem;
  background: ${({ theme: { colors } }) => colors.lightGrey};
  margin-bottom: 7rem;
`;

export const TextBoxContainer = styled.div`
  width: 100%;
  grid-column: 1 / 2;
  align-self: center;
  position: relative;
  z-index: 750;
  color: ${({ theme: { colors } }) => colors.lightGrey};

  h1 {
    width: 65%;
    font-size: 3em;
    line-height: 0.9;
    margin-bottom: 2rem;
  }

  & > button {
    margin-top: 3rem;
  }

  @media ${mobileS} {
    grid-row: 2 / 3;
  }
`;

export const ImageBox = styled.div`
  background: ${({ imgUrl }) => `url("${imgUrl}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 53rem;
  height: 64rem;
  position: absolute;
  top: 9%;
  right: 0%;
  z-index: 100;

  @media ${mobileS} {
    grid-row: 1 / 2;
    width: 100%;
    top: 0%;
  }
`;

export const BackgroundImgLeft = styled.div`
  background: ${({ imgUrl }) => `url("${imgUrl}")`};
  background-repeat: no-repeat;
  background-size: 35%;
  background-position: left;
  position: absolute;
  top: 50%;
  left: 0;
  height: 65rem;
  width: 65rem;
  z-index: 500;

  @media ${mobileS} {
    display: none;
  }
`;

export const BackgroundImgRight = styled.div`
  background: ${({ imgUrl }) => `url("${imgUrl}")`};
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: right;
  position: absolute;
  top: -10rem;
  right: 0;
  height: 60rem;
  width: 60rem;
  z-index: 500;

  @media ${mobileS} {
    display: none;
  }
`;

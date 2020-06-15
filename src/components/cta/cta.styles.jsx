import styled from "styled-components";

export const CtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7rem;
  margin: 15rem 0;
  background: ${({ theme: { colors } }) => colors.violetDark};
  position: relative;
  overflow: hidden;

  & > button {
    position: relative;
    z-index: 1000;
  }
`;

export const TitleBox = styled.div`
  color: ${({ theme: { colors } }) => colors.lightGrey};
  max-width: 47rem;

  h1 {
    font-size: 3em;
    line-height: 0.9;
  }
`;

export const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  right: -2rem;
  width: 45rem;
  height: 40rem;
  background: ${({ imgSrc }) => `url("${imgSrc}")`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  z-index: 100;
`;

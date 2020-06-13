import styled from "styled-components";

export const CtaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7rem;
  margin: 15rem 0;
  background: ${({ theme: { colors } }) => colors.violetDark};
`;

export const TitleBox = styled.div`
  color: ${({ theme: { colors } }) => colors.lightGrey};
  max-width: 47rem;

  h1 {
    font-size: 3em;
    line-height: 0.9;
  }
`;

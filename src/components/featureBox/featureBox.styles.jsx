import styled from "styled-components";

export const FeatureBoxContainer = styled.div`
  & > *:last-child p {
    color: ${({ theme: { colors } }) => colors.greyViolet};
  }
`;

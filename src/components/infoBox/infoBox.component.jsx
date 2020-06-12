import React from "react";

import { InfoBoxContainer } from "./infoBox.styles.jsx";

const InfoBox = ({ title, content, priority, alignment }) => {
  const titleRender = (function () {
    return priority === "h1" ? (
      <h1>{title}</h1>
    ) : priority === "h2" ? (
      <h2>{title}</h2>
    ) : priority === "h3" ? (
      <h3>{title}</h3>
    ) : priority === "h4" ? (
      <h4>{title}</h4>
    ) : (
      <h1>{title}</h1>
    );
  })();

  return (
    <InfoBoxContainer alignment={alignment}>
      {titleRender}
      <p>{content}</p>
    </InfoBoxContainer>
  );
};

export default InfoBox;

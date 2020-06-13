import React from "react";

import InfoBox from "../infoBox/infoBox.component";

import SnappyIcon from "../../assets/icon-snappy-process.svg";
import AffordableIcon from "../../assets/icon-affordable-prices.svg";
import PeopleIcon from "../../assets/icon-people-first.svg";
import { FeatureBoxContainer } from "./featureBox.styles.jsx";

const FeatureBox = ({ imgImport, ...infoBoxProps }) => {
  const imgSrc = (() =>
    imgImport === "snappy"
      ? SnappyIcon
      : imgImport === "affordable"
      ? AffordableIcon
      : imgImport === "people"
      ? PeopleIcon
      : SnappyIcon)();

  return (
    <FeatureBoxContainer>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <InfoBox {...infoBoxProps} />
    </FeatureBoxContainer>
  );
};

export default FeatureBox;

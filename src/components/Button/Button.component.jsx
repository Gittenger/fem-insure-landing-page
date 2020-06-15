import React from "react";

import { CustomButton } from "./Button.styles.jsx";

const Button = ({ content, type }) => (
  <CustomButton type={type}>{content}</CustomButton>
);

export default Button;

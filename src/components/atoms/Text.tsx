import React from "react";
import { Typography } from "@mui/material";
import { TextProps } from "@components/atoms/Text";

const Text: React.FC<TextProps> = ({
  variant,
  align = "inherit",
  color = "textPrimary",
  gutterBottom = false,
  noWrap = false,
  children,
}: TextProps) => {
  return (
    <Typography
      variant={variant}
      align={align}
      color={color}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
    >
      {children}
    </Typography>
  );
};

export default Text;

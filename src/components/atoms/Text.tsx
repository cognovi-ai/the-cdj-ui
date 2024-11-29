import React from 'react';
import { TextProps } from '@components/atoms/Text';
import { Typography } from '@mui/material';

const Text: React.FC<TextProps> = ({
  variant,
  align = 'inherit',
  color = 'textPrimary',
  gutterBottom = false,
  noWrap = false,
  children,
  sx,
}: TextProps) => {
  return (
    <Typography
      align={align}
      color={color}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      sx={sx}
      variant={variant}
    >
      {children}
    </Typography>
  );
};

export default Text;

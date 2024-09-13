import React from 'react';
import { Typography } from '@mui/material';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'subtitle1' | 'subtitle2' ;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  gutterBottom?: boolean;
  noWrap?: boolean;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  variant,
  align = 'inherit',   
  color = 'textPrimary',
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
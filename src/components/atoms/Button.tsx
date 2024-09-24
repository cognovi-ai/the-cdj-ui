'use client';

import { ButtonProps } from '@components/atoms/Button';
import { Button as MuiButton } from '@mui/material';
import React from 'react';

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick,
  sx = {},
  ariaLabel = '',
  tabIndex = 0,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      aria-label={ariaLabel || label}
      color={color}
      onClick={onClick}
      size={size}
      sx={sx}
      tabIndex={tabIndex}
      variant={variant}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default Button;

'use client';
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@components/atoms/Button';

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} color={color} size={size} onClick={onClick} {...props}>
      {label}
    </MuiButton>
  );
};

export default Button;
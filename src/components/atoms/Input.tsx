'use client';
import React from 'react';
import { TextField as MuiInput } from '@mui/material';
import { InputProps } from '@components/atoms/Input';

const Input: React.FC<InputProps> = ({
  label,
  variant = 'outlined',
  type = 'text',
  value,
  onChange,
  placeholder,
  helperText,
  error,
  disabled,
  multiline,
  rows,
  sx,
  ...props
}: InputProps) => {
  return (
    <MuiInput
      label={label}
      variant={variant}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      helperText={helperText}
      error={error}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      sx={sx}
      {...props}
    />
  );
};

export default Input;
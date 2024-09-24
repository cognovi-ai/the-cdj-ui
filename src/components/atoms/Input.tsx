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
  ariaLabel,
  ariaLabelledBy,
  tabIndex,
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
      slotProps={{
        input: {
          'aria-label': ariaLabel,
          'aria-labelledby': ariaLabelledBy,
        },
        htmlInput: {
          tabIndex: tabIndex,
        },
      }}
      {...props}
    />
  );
};

export default Input;
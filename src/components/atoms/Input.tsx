'use client';

import { InputProps } from '@components/atoms/Input';
import { TextField as MuiInput } from '@mui/material';
import React from 'react';

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
      disabled={disabled}
      error={error}
      helperText={helperText}
      label={label}
      multiline={multiline}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      slotProps={{
        input: {
          'aria-label': ariaLabel,
          'aria-labelledby': ariaLabelledBy,
        },
        htmlInput: {
          tabIndex: tabIndex,
        },
      }}
      sx={sx}
      type={type}
      value={value}
      variant={variant}
      {...props}
    />
  );
};

export default Input;

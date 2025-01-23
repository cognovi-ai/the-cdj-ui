'use client';

import { IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputProps } from '@components/atoms/Input';
import { TextField as MuiInput } from '@mui/material';

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
  hideInput = false,
  ...props
}: InputProps) => {
  const [showInput, setShowInput] = useState(false);

  const handleClickShowInput = () => {
    setShowInput(!showInput);
  };

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
          endAdornment: hideInput ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle input visibility"
                onClick={handleClickShowInput}
                edge="end"
              >
                {showInput ? <Visibility /> : <VisibilityOff />}{' '}
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
        htmlInput: {
          tabIndex: tabIndex,
        },
      }}
      sx={sx}
      type={showInput ? 'text' : type}
      value={value}
      variant={variant}
      {...props}
    />
  );
};

export default Input;

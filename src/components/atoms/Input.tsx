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
  showPasswordToggle = false,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
          endAdornment:
            type === 'password' && showPasswordToggle ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}{' '}
                </IconButton>
              </InputAdornment>
            ) : undefined,
        },
        htmlInput: {
          tabIndex: tabIndex,
        },
      }}
      sx={sx}
      type={showPassword ? 'text' : type}
      value={value}
      variant={variant}
      {...props}
    />
  );
};

export default Input;

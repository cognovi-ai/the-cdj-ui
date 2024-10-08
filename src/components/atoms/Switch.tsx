'use client';

import { Switch as MuiSwitch } from '@mui/material';
import React from 'react';
import { SwitchProps } from '@components/atoms/Switch';

const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  color = 'primary',
  size = 'medium',
  disabled = false,
  sx = {},
  ariaLabel = '',
  tabIndex = 0,
  inputProps = {},
  ...props
}) => {
  return (
    <MuiSwitch
      checked={checked}
      color={color}
      disabled={disabled}
      inputProps={{ 'aria-label': ariaLabel, ...inputProps }}
      onChange={onChange}
      size={size}
      sx={sx}
      tabIndex={tabIndex}
      {...props}
    />
  );
};

export default Switch;

'use client';
import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { CheckboxProps } from '@components/atoms/Checkbox';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  color = 'primary',
  disabled = false,
  size = 'medium',
  indeterminate = false,
  labelPlacement = 'end',
  required = false,
  tabIndex,
  ariaLabel,
  ...props
}: CheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
          color={color}
          disabled={disabled}
          size={size}
          indeterminate={indeterminate}
          required={required}
          tabIndex={tabIndex}
          aria-label={ariaLabel}
          {...props}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Checkbox;
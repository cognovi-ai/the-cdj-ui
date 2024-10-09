'use client';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import { CheckboxProps } from '@components/atoms/Checkbox';
import React from 'react';

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
          aria-label={ariaLabel}
          checked={checked}
          color={color}
          disabled={disabled}
          indeterminate={indeterminate}
          onChange={onChange}
          required={required}
          size={size}
          tabIndex={tabIndex}
          {...props}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Checkbox;

declare module '@components/atoms/Button' {
  import { FC } from 'react';
  import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
  import { SxProps, Theme } from '@mui/system';

  export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
    label: string;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    ariaLabel?: string;
    tabIndex?: number;
    role?: string;
    sx?: SxProps<Theme>; 
  }

  const Button: FC<ButtonProps>;
  export default Button;
}
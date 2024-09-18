declare module '@components/atoms/Button' {
    import { FC } from 'react';
    import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
  
    export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
      label: string;
      color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    }
  
    const Button: FC<ButtonProps>;
    export default Button;
}
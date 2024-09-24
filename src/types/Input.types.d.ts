declare module '@components/atoms/Input' {
  import { FC, ChangeEventHandler } from 'react';
  import { TextFieldProps as MuiInputProps } from '@mui/material/TextField';

  export interface InputProps extends Omit<MuiInputProps, 'variant' | 'onChange'> {
    label: string;
    type?: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value?: string | number;
    variant?: 'filled' | 'outlined' | 'standard';
    placeholder?: string;
    helperText?: string;
    error?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    sx?: object;
    tabIndex?: number;
    ariaLabel?: string;
    ariaLabelledBy?: string;
  }

  const Input: FC<InputProps>;
  export default Input;
}
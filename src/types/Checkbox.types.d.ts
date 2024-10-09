declare module '@components/atoms/Checkbox' {
  import { FC } from 'react';
  import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

  export interface CheckboxProps extends Omit<MuiCheckboxProps, 'onChange'> {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
    required?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
  }

  const Checkbox: FC<CheckboxProps>;
  export default Checkbox;
}

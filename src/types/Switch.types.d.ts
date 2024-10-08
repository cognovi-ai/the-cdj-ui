declare module '@components/atoms/Switch' {
  import { SxProps, Theme } from '@mui/system';
  import { FC } from 'react';
  import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

  export interface SwitchProps extends Omit<MuiSwitchProps, 'color'> {
    checked?: boolean;
    color?:
      | 'primary'
      | 'secondary'
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
      | 'default';
    disabled?: boolean;
    onChange?: MuiSwitchProps['onChange'];
    size?: 'small' | 'medium';
    sx?: SxProps<Theme>;
    value?: unknown;
    ariaLabel?: string;
    tabIndex?: number;
    inputProps?: MuiSwitchProps['inputProps'];
  }

  const Switch: FC<SwitchProps>;
  export default Switch;
}

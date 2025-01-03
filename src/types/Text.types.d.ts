declare module '@components/atoms/Text' {
  import { FC, ReactNode } from 'react';
  import { SxProps } from '@mui/material';

  export interface TextProps {
    variant?:
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'body1'
      | 'body2'
      | 'button'
      | 'caption'
      | 'overline'
      | 'subtitle1'
      | 'subtitle2';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    color?:
      | 'initial'
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'textPrimary'
      | 'textSecondary'
      | 'error';
    gutterBottom?: boolean;
    noWrap?: boolean;
    children: ReactNode;
    sx?: SxProps;
  }

  const Text: FC<TextProps>;
  export default Text;
}

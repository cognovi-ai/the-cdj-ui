declare module '@components/atoms/Link' {
  import { ElementType, FC, ReactNode } from 'react';
  import { SxProps, Theme } from '@mui/system';
  import { LinkProps as MuiLinkProps } from '@mui/material/Link';

  export interface LinkProps
    extends Omit<
      MuiLinkProps,
      'color' | 'variant' | 'underline' | 'href' | 'onClick'
    > {
    href?: string;
    color?:
      | 'initial'
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'textPrimary'
      | 'textSecondary'
      | 'error';
    underline?: 'none' | 'hover' | 'always';
    variant?:
      | 'inherit'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'subtitle1'
      | 'subtitle2'
      | 'body1'
      | 'body2'
      | 'caption'
      | 'button'
      | 'overline';
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    sx?: SxProps<Theme>;
    tabIndex?: number;
    children: ReactNode;
    ariaLabel?: string;
    role?: string;
    component?: ElementType;
  }

  declare const Link: FC<LinkProps>;
  export default Link;
}

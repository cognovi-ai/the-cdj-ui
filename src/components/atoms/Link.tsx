'use client';

import { LinkProps } from '@components/atoms/Link';
import { Link as MuiLink } from '@mui/material';
import React from 'react';

const Link: React.FC<LinkProps> = ({
  href,
  color = 'primary',
  underline = 'always',
  variant = 'inherit',
  target,
  rel,
  onClick,
  sx = {},
  tabIndex = 0,
  children,
  ariaLabel,
  role,
  component,
  ...props
}) => {
  if (!href && component !== 'button') {
    throw new Error(
      'The `href` prop is required unless `component="button"` is used.'
    );
  }

  const computedRel =
    target === '_blank'
      ? rel
        ? `${rel} noopener noreferrer`
        : 'noopener noreferrer'
      : rel;

  const linkProps = {
    ...(component !== 'button' && { href }),
    target,
    rel: computedRel,
    onClick,
    'aria-label': ariaLabel,
    role,
    tabIndex,
    component,
  };

  return (
    <MuiLink
      color={color}
      sx={sx}
      underline={underline}
      variant={variant}
      {...linkProps}
      {...props}
    >
      {children}
    </MuiLink>
  );
};

export default Link;

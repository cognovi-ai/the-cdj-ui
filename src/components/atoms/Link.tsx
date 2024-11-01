'use client';

import { LinkProps } from '@components/atoms/Link';
import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
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
  ...props
}) => {
  if (!href) {
    throw new Error('The `href` prop is required for the `Link` component.');
  }

  const computedRel =
    target === '_blank'
      ? rel
        ? `${rel} noopener noreferrer`
        : 'noopener noreferrer'
      : rel;

  const linkProps = {
    href,
    target,
    rel: computedRel,
    onClick,
    'aria-label': ariaLabel,
    role,
    tabIndex,
  };

  return (
    <NextLink href={href} legacyBehavior passHref>
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
    </NextLink>
  );
};

export default Link;

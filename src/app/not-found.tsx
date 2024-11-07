'use client';
import { Container, Divider } from '@mui/material';
import Link from '../../src/components/atoms/Link';
import React from 'react';
import Text from '../../src/components/atoms/Text';
import dynamic from 'next/dynamic';

const REDIRECT_ROUTE = '/';

function NotFound() {
  const backLink =
    document.referrer &&
    new URL(document.referrer).origin === window.location.origin
      ? document.referrer
      : REDIRECT_ROUTE;

  const linkLabel = backLink === REDIRECT_ROUTE ? 'Go to login' : 'Go back';

  return (
    <Container
      maxWidth="md"
      style={{
        padding: '2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Text variant="h2">404</Text>
        <Divider flexItem orientation="vertical" style={{ height: '40px' }} />
        <Text variant="h2">Page not found.</Text>
      </div>
      <Link
        href={backLink}
        sx={{
          marginTop: '1rem',
          color: 'primary.main',
          '&:hover': {
            color: 'primary.dark',
          },
        }}
      >
        {linkLabel}
      </Link>
    </Container>
  );
}

const DynamicNotFound = dynamic(() => Promise.resolve(NotFound), {
  ssr: false,
});

export default DynamicNotFound;

'use client';
import { Container, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from '../../src/components/atoms/Link';
import Text from '../../src/components/atoms/Text';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

export const NotFoundContent = () => {
  const router = useRouter();

  const [backLink, setBackLink] = useState('/');
  const [linkLabel, setLinkLabel] = useState('Go to Login');
  const [ariaLabel, setAriaLabel] = useState('Go to Login');

  useEffect(() => {
    if (typeof window !== 'undefined' && document.referrer) {
      const referrerOrigin = new URL(document.referrer).origin;
      const currentOrigin = window.location.origin;

      const initialBackLink =
        referrerOrigin === currentOrigin ? document.referrer : '/';
      const initialLinkLabel =
        initialBackLink === '/' ? 'Go to Login' : 'Return to Previous Page';

      setBackLink(initialBackLink);
      setLinkLabel(initialLinkLabel);

      const initialAriaLabel =
        initialBackLink === '/' ? 'Go to Login' : 'Return to Previous Page';
      setAriaLabel(initialAriaLabel);
    }
  }, []);

  const handleBack = (event: React.MouseEvent) => {
    event.preventDefault();
    if (backLink === document.referrer) {
      router.back();
    } else {
      router.push(backLink);
    }
  };

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
        <Text variant="h1">404</Text>
        <Divider flexItem orientation="vertical" style={{ height: '40px' }} />
        <Text variant="h2">This page could not be found.</Text>
      </div>
      <Link
        aria-label={ariaLabel}
        href={backLink}
        onClick={handleBack}
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
};

const NotFound = dynamic(() => Promise.resolve(NotFoundContent), {
  ssr: false,
});

export default NotFound;

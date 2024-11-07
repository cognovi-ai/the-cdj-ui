import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import DynamicNotFound from '../../src/app/not-found';
import React from 'react';

describe('NotFound Page', () => {
  it('should render the 404 message', async () => {
    render(<DynamicNotFound />);
    await waitFor(() => {
      expect(screen.getByText('404')).toBeInTheDocument();
      expect(screen.getByText('Page not found.')).toBeInTheDocument();
    });
  });

  it('should render the Go to login link when there is no referrer', async () => {
    Object.defineProperty(document, 'referrer', { value: '', writable: true });
    render(<DynamicNotFound />);
    await waitFor(() => {
      expect(screen.getByText('Go to login')).toBeInTheDocument();
    });
  });

  it('should render the Go back link when there is a referrer from the same origin', async () => {
    Object.defineProperty(document, 'referrer', {
      value: window.location.origin,
      writable: true,
    });
    render(<DynamicNotFound />);
    await waitFor(() => {
      expect(screen.getByText('Go back')).toBeInTheDocument();
    });
  });

  it('should render the Go to login link when the referrer is from a different origin', async () => {
    Object.defineProperty(document, 'referrer', {
      value: 'https://external.com',
      writable: true,
    });
    render(<DynamicNotFound />);
    await waitFor(() => {
      expect(screen.getByText('Go to login')).toBeInTheDocument();
    });
  });
});

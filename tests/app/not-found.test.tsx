import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NotFoundContent } from '../../src/app/not-found';
import React from 'react';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('NotFoundContent Component', () => {
  const mockBack = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      back: mockBack,
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the 404 message', async () => {
    render(<NotFoundContent />);

    await waitFor(() => {
      expect(screen.getByText('404')).toBeInTheDocument();
      expect(
        screen.getByText('This page could not be found.')
      ).toBeInTheDocument();
    });
  });

  it('should render "Go to Home Page" when there is no referrer', async () => {
    Object.defineProperty(window, 'location', {
      value: { origin: 'http://localhost' },
      writable: true,
    });
    Object.defineProperty(document, 'referrer', { value: '', writable: true });

    render(<NotFoundContent />);

    expect(await screen.findByText('Go to Home Page')).toBeInTheDocument();
  });

  it('should render "Return to Previous Page" when referrer is from the same origin', async () => {
    Object.defineProperty(window, 'location', {
      value: { origin: 'http://localhost' },
      writable: true,
    });
    Object.defineProperty(document, 'referrer', {
      value: 'http://localhost/previous-page',
      writable: true,
    });

    render(<NotFoundContent />);

    expect(
      await screen.findByText('Return to Previous Page')
    ).toBeInTheDocument();
  });

  it('should render "Go to Home Page" when referrer is from a different origin', async () => {
    Object.defineProperty(window, 'location', {
      value: { origin: 'http://localhost' },
      writable: true,
    });
    Object.defineProperty(document, 'referrer', {
      value: 'https://external.com',
      writable: true,
    });

    render(<NotFoundContent />);

    expect(await screen.findByText('Go to Home Page')).toBeInTheDocument();
  });

  it('clicking the link calls router.back() when backLink matches document.referrer', async () => {
    Object.defineProperty(window, 'location', {
      value: { origin: 'http://localhost' },
      writable: true,
    });
    const referrer = 'http://localhost/previous-page';
    Object.defineProperty(document, 'referrer', {
      value: referrer,
      writable: true,
    });

    render(<NotFoundContent />);

    const linkElement = await screen.findByText('Return to Previous Page');
    fireEvent.click(linkElement);

    expect(mockBack).toHaveBeenCalled();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('clicking the link calls router.push("/") when backLink does not match document.referrer', async () => {
    Object.defineProperty(window, 'location', {
      value: { origin: 'http://localhost' },
      writable: true,
    });
    Object.defineProperty(document, 'referrer', {
      value: '',
      writable: true,
    });

    render(<NotFoundContent />);

    const linkElement = await screen.findByText('Go to Home Page');
    fireEvent.click(linkElement);

    expect(mockPush).toHaveBeenCalledWith('/');
    expect(mockBack).not.toHaveBeenCalled();
  });
});

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Link from '../../../src/components/atoms/Link';
import React from 'react';

describe('Link component', () => {
  const defaultProps = {
    href: 'https://www.example.com',
    children: 'Example Link',
  };

  it('renders the link with correct href and text', () => {
    render(<Link {...defaultProps} />);
    const linkElement = screen.getByRole('link', { name: 'Example Link' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', defaultProps.href);
  });

  it('includes rel="noopener noreferrer" when target="_blank"', () => {
    render(<Link {...defaultProps} target="_blank" />);
    const linkElement = screen.getByRole('link', { name: 'Example Link' });
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('includes custom rel attribute when provided with target="_blank"', () => {
    render(<Link {...defaultProps} rel="nofollow" target="_blank" />);
    const linkElement = screen.getByRole('link', { name: 'Example Link' });
    expect(linkElement).toHaveAttribute('rel', 'nofollow noopener noreferrer');
  });

  it('does not include rel when target is not "_blank"', () => {
    render(<Link {...defaultProps} rel="nofollow" />);
    const linkElement = screen.getByRole('link', { name: 'Example Link' });
    expect(linkElement).toHaveAttribute('rel', 'nofollow');
  });

  it('handles onClick event', () => {
    const handleClick = jest.fn();
    render(
      <Link {...defaultProps} onClick={handleClick}>
        Clickable Link
      </Link>
    );
    const linkElement = screen.getByRole('link', { name: 'Clickable Link' });
    fireEvent.click(linkElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders as a button when component="button"', () => {
    const handleClick = jest.fn();
    render(
      <Link component="button" onClick={handleClick}>
        Button Link
      </Link>
    );
    const buttonElement = screen.getByRole('button', { name: 'Button Link' });
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(buttonElement).not.toHaveAttribute('href');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies aria-label when provided', () => {
    render(<Link {...defaultProps} ariaLabel="Custom Aria Label" />);
    const linkElement = screen.getByLabelText('Custom Aria Label');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', defaultProps.href);
  });

  it('does not have aria-label when not provided', () => {
    render(<Link {...defaultProps} />);
    const linkElement = screen.getByRole('link', { name: 'Example Link' });
    expect(linkElement).not.toHaveAttribute('aria-label');
  });

  it('passes additional props to the underlying component', () => {
    render(<Link {...defaultProps} data-testid="custom-link" />);
    const linkElement = screen.getByTestId('custom-link');
    expect(linkElement).toBeInTheDocument();
  });

  it('supports custom components via the "component" prop', () => {
    const CustomComponent = React.forwardRef<
      HTMLAnchorElement,
      React.AnchorHTMLAttributes<HTMLAnchorElement>
    >((props, ref) => (
      <a data-testid="custom-component" ref={ref} {...props} />
    ));

    CustomComponent.displayName = 'CustomComponent';

    render(
      <Link component={CustomComponent} href="/custom">
        Custom Component Link
      </Link>
    );

    const customElement = screen.getByTestId('custom-component');
    expect(customElement).toBeInTheDocument();
    expect(customElement).toHaveAttribute('href', '/custom');
    expect(customElement).toHaveTextContent('Custom Component Link');
  });

  it('handles missing href when component is "button"', () => {
    render(<Link component="button">Button without href</Link>);
    const buttonElement = screen.getByRole('button', {
      name: 'Button without href',
    });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(buttonElement).not.toHaveAttribute('href');
  });

  it('throws an error when href is missing and component is not "button"', () => {
    console.error = jest.fn();
    expect(() => {
      render(<Link>Link without href</Link>);
    }).toThrow();
  });
});

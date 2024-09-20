import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../src/components/atoms/Button';
import { Button as MuiButton } from '@mui/material';
import '@testing-library/jest-dom';

jest.mock('@mui/material', () => ({
  Button: jest.fn().mockImplementation(({ children, ...props }) => (
    <button {...props}>{children}</button>
  )),
}));

describe('Button component', () => {
  const defaultProps = {
    label: 'Test Button',
    variant: 'contained' as const,
    color: 'primary' as const,
    size: 'medium' as const,
    onClick: jest.fn(),
  };

  beforeEach(() => {
    (MuiButton as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the button with correct label', () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('should pass the correct variant prop to MuiButton', () => {
    render(<Button {...defaultProps} variant="outlined" />);
    expect(MuiButton).toHaveBeenCalledWith(
      expect.objectContaining({ variant: 'outlined' }),
      expect.anything()
    );
  });

  it('should pass the correct color prop to MuiButton', () => {
    render(<Button {...defaultProps} color="secondary" />);
    expect(MuiButton).toHaveBeenCalledWith(
      expect.objectContaining({ color: 'secondary' }),
      expect.anything()
    );
  });

  it('should pass the correct size prop to MuiButton', () => {
    render(<Button {...defaultProps} size="small" />);
    expect(MuiButton).toHaveBeenCalledWith(
      expect.objectContaining({ size: 'small' }),
      expect.anything()
    );
  });

  it('should call onClick when the button is clicked', () => {
    render(<Button {...defaultProps} />);
    fireEvent.click(screen.getByText('Test Button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should use default values when no props are provided', () => {
    render(<Button label="Default Button" />);
    expect(MuiButton).toHaveBeenCalledWith(
      expect.objectContaining({
        variant: 'contained',
        color: 'primary',
        size: 'medium',
      }),
      expect.anything()
    );
    expect(screen.getByText('Default Button')).toBeInTheDocument();
  });

  it('should pass additional props to MuiButton', () => {
    render(<Button {...defaultProps} disabled />);
    expect(MuiButton).toHaveBeenCalledWith(
      expect.objectContaining({ disabled: true }),
      expect.anything()
    );
  });

  it('should pass the correct aria-label to the button', () => {
    const ariaLabel = 'Click me';
    render(<Button {...defaultProps} ariaLabel={ariaLabel} />);
    expect(screen.getByLabelText(ariaLabel)).toBeInTheDocument();
  });

  it('should set the correct tabIndex on the button', () => {
    const tabIndex = 1;
    render(<Button {...defaultProps} tabIndex={tabIndex} />);
    expect(screen.getByText('Test Button')).toHaveAttribute('tabindex', '1');
  });

  it('should apply sx prop to the button', () => {
    const sx = { margin: 2 };
    render(<Button {...defaultProps} sx={sx} />);
    
    expect(MuiButton).toHaveBeenCalledWith(
      expect.objectContaining({
        sx: expect.objectContaining({
          margin: 2,
        }),
      }),
      expect.anything()
    );
  });
});
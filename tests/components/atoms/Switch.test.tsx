import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Switch as MuiSwitch } from '@mui/material';
import React from 'react';
import Switch from '../../../src/components/atoms/Switch';

jest.mock('@mui/material', () => ({
  Switch: jest
    .fn()
    .mockImplementation(({ inputProps, ...props }) => (
      <input type="checkbox" {...inputProps} {...props} />
    )),
}));

describe('Switch component', () => {
  const defaultProps = {
    checked: false,
    onChange: jest.fn(),
    color: 'primary' as const,
    size: 'medium' as const,
    disabled: false,
    ariaLabel: 'Test Switch',
  };

  beforeEach(() => {
    (MuiSwitch as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the switch', () => {
    render(<Switch {...defaultProps} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should have the correct checked state', () => {
    render(<Switch {...defaultProps} checked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should call onChange when toggled', () => {
    render(<Switch {...defaultProps} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct color prop to MuiSwitch', () => {
    render(<Switch {...defaultProps} color="secondary" />);
    expect(MuiSwitch).toHaveBeenCalledWith(
      expect.objectContaining({ color: 'secondary' }),
      expect.anything()
    );
  });

  it('should pass the correct size prop to MuiSwitch', () => {
    render(<Switch {...defaultProps} size="small" />);
    expect(MuiSwitch).toHaveBeenCalledWith(
      expect.objectContaining({ size: 'small' }),
      expect.anything()
    );
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Switch {...defaultProps} disabled={true} />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('should apply the correct aria-label', () => {
    render(<Switch {...defaultProps} ariaLabel="Custom Aria Label" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-label',
      'Custom Aria Label'
    );
  });

  it('should set the correct tabIndex on the input', () => {
    render(<Switch {...defaultProps} tabIndex={-1} />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('tabindex', '-1');
  });

  it('should apply sx prop to MuiSwitch', () => {
    const sx = { margin: 2 };
    render(<Switch {...defaultProps} sx={sx} />);
    expect(MuiSwitch).toHaveBeenCalledWith(
      expect.objectContaining({
        sx: expect.objectContaining({
          margin: 2,
        }),
      }),
      expect.anything()
    );
  });

  it('should pass additional inputProps to the input element', () => {
    const inputProps = { 'data-testid': 'custom-switch' };
    render(<Switch {...defaultProps} inputProps={inputProps} />);
    expect(screen.getByTestId('custom-switch')).toBeInTheDocument();
  });

  it('should use default values when no props are provided', () => {
    render(<Switch onChange={jest.fn()} />);
    expect(MuiSwitch).toHaveBeenCalledWith(
      expect.objectContaining({
        checked: false,
        color: 'primary',
        size: 'medium',
        disabled: false,
      }),
      expect.anything()
    );
  });
});

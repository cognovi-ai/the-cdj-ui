import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from '../../../src/components/atoms/Checkbox';
import React from 'react';

describe('Checkbox component', () => {
  const defaultProps = {
    label: 'Test Checkbox',
    checked: false,
    onChange: jest.fn(),
  };

  it('should render the checkbox with the correct label', () => {
    render(<Checkbox {...defaultProps} />);
    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  it('should pass the correct checked state to the checkbox', () => {
    const { rerender } = render(<Checkbox {...defaultProps} checked={false} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    rerender(<Checkbox {...defaultProps} checked={true} />);
    expect(checkbox.checked).toBe(true);
  });

  it('should call onChange when the checkbox is clicked', () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should apply the correct color', () => {
    render(<Checkbox {...defaultProps} color="secondary" />);
    const checkboxWrapper = screen.getByRole('checkbox').parentElement;
    expect(checkboxWrapper).toHaveClass('MuiCheckbox-colorSecondary');
  });

  it('should render the checkbox as required', () => {
    render(<Checkbox {...defaultProps} required />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeRequired();
  });

  it('should handle labelPlacement correctly', () => {
    const { rerender } = render(
      <Checkbox {...defaultProps} labelPlacement="end" />
    );
    const checkboxLabelEnd = screen.getByText('Test Checkbox');
    expect(checkboxLabelEnd).toBeInTheDocument();

    rerender(<Checkbox {...defaultProps} labelPlacement="start" />);
    const checkboxLabelStart = screen.getByText('Test Checkbox');
    expect(checkboxLabelStart).toBeInTheDocument();
  });

  it('should apply aria-label correctly for accessibility', () => {
    render(<Checkbox {...defaultProps} ariaLabel="Test Checkbox Aria Label" />);
    const checkbox = screen.getByLabelText('Test Checkbox Aria Label');
    expect(checkbox).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Checkbox {...defaultProps} disabled />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.disabled).toBe(true);
  });

  it('should apply the correct tabIndex', () => {
    render(<Checkbox {...defaultProps} tabIndex={2} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('tabIndex', '2');
  });
});

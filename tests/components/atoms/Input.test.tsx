import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../../../src/components/atoms/Input';
import React from 'react';

describe('Input component', () => {
  const defaultProps = {
    label: 'Test Input',
    value: '',
    onChange: jest.fn(),
    placeholder: 'Enter value',
  };

  it('should render the input with the correct label', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('should display the correct value', () => {
    render(<Input {...defaultProps} value="Test Value" />);
    const input = screen.getByLabelText('Test Input') as HTMLInputElement;
    expect(input.value).toBe('Test Value');
  });

  it('should call onChange when the input value changes', () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByLabelText('Test Input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should render the placeholder text correctly', () => {
    render(<Input {...defaultProps} placeholder="Enter your username" />);
    const input = screen.getByPlaceholderText('Enter your username');
    expect(input).toBeInTheDocument();
  });

  it('should apply the correct aria-label for accessibility', () => {
    render(<Input {...defaultProps} ariaLabel="Test Aria Label" />);
    const input = screen.getByLabelText('Test Aria Label');
    expect(input).toBeInTheDocument();
  });

  it('should apply the correct tabIndex', () => {
    render(<Input {...defaultProps} tabIndex={3} />);
    const input = screen.getByLabelText('Test Input');
    expect(input).toHaveAttribute('tabIndex', '3');
  });

  it('should render the input as disabled when disabled prop is true', () => {
    render(<Input {...defaultProps} disabled />);
    const input = screen.getByLabelText('Test Input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('should render the input with an error state when error prop is true', () => {
    render(
      <Input {...defaultProps} error helperText="This field is required" />
    );
    const input = screen.getByLabelText('Test Input');
    expect(input).toBeInTheDocument();
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should render as multiline with the correct number of rows when multiline prop is true', () => {
    render(<Input {...defaultProps} multiline rows={3} />);
    const input = screen.getByLabelText('Test Input') as HTMLTextAreaElement;
    expect(input.tagName.toLowerCase()).toBe('textarea');
    expect(input.rows).toBe(3);
  });

  it('should show an input toggle button when hideInput is true', () => {
    render(<Input {...defaultProps} type="password" hideInput />);
    const input = screen.getByLabelText('Test Input') as HTMLInputElement;
    expect(input.type).toBe('password');

    const inputToggle = screen.getByLabelText('toggle input visibility');
    expect(inputToggle).toBeInTheDocument();

    fireEvent.click(inputToggle);
    expect(input.type).toBe('text');

    fireEvent.click(inputToggle);
    expect(input.type).toBe('password');
  });

  it('should not show an input toggle button when hideInput is false', () => {
    render(<Input {...defaultProps} type="password" hideInput={false} />);
    const input = screen.getByLabelText('Test Input') as HTMLInputElement;
    expect(input.type).toBe('password');

    const inputToggle = screen.queryByLabelText('toggle input visibility');
    expect(inputToggle).not.toBeInTheDocument();
  });
});

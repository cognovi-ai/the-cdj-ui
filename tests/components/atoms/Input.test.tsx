import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../src/components/atoms/Input';
import { TextField as MuiInput } from '@mui/material';
import '@testing-library/jest-dom';

jest.mock('@mui/material', () => ({
  TextField: jest.fn().mockImplementation(({ label, helperText, error, ...props }) => (
    <>
      <input aria-label={label} {...props} />
      {helperText && <span aria-label="helperText">{helperText}</span>}
      {error && <span aria-label="error">Error</span>}
    </>
  )),
}));

describe('Input component', () => {
  const defaultProps = {
    label: 'Test Input',
    variant: 'outlined' as const,
    value: '',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    (MuiInput as jest.Mock).mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the input with the correct label', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('should pass the correct variant prop to MuiInput', () => {
    render(<Input {...defaultProps} variant="filled" />);
    expect(MuiInput).toHaveBeenCalledWith(
      expect.objectContaining({ variant: 'filled' }),
      expect.anything()
    );
  });

  it('should call onChange when the input value changes', () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should pass the correct type prop to MuiInput', () => {
    render(<Input {...defaultProps} type="password" />);
    expect(MuiInput).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'password' }),
      expect.anything()
    );
  });

  it('should use default values when no props are provided', () => {
    render(<Input label="Default Input" />);
    expect(MuiInput).toHaveBeenCalledWith(
      expect.objectContaining({
        variant: 'outlined',
        type: 'text',
      }),
      expect.anything()
    );
    expect(screen.getByLabelText('Default Input')).toBeInTheDocument();
  });

  it('should pass additional props to MuiInput', () => {
    render(<Input {...defaultProps} disabled />);
    expect(MuiInput).toHaveBeenCalledWith(
      expect.objectContaining({ disabled: true }),
      expect.anything()
    );
  });

  it('should render the placeholder text', () => {
    render(<Input {...defaultProps} placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  it('should render helper text when provided', () => {
    render(<Input {...defaultProps} helperText="This is helper text" />);
    expect(screen.getByLabelText('helperText')).toHaveTextContent('This is helper text');
  });

  it('should show an error when the error prop is true', () => {
    render(<Input {...defaultProps} error />);
    expect(screen.getByLabelText('error')).toHaveTextContent('Error');
  });

  it('should handle multiline input', () => {
    render(<Input {...defaultProps} multiline rows={4} />);
    expect(MuiInput).toHaveBeenCalledWith(
      expect.objectContaining({ multiline: true, rows: 4 }),
      expect.anything()
    );
  });

  it('should pass the sx prop for custom styling', () => {
    const sx = { backgroundColor: 'lightgray' };
    render(<Input {...defaultProps} sx={sx} />);
    expect(MuiInput).toHaveBeenCalledWith(
      expect.objectContaining({ sx }),
      expect.anything()
    );
  });
});
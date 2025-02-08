import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { FlashComponent } from '../../../src/components/utils/FlashComponent';
import React from 'react';
import { useFlash } from '../../../src/contexts/useFlash';

// Mock the useFlash context
jest.mock('../../../src/contexts/useFlash');

describe('FlashComponent', () => {
  let mockClearFlash: jest.Mock;
  let mockUseFlash: jest.Mock;

  beforeEach(() => {
    mockClearFlash = jest.fn();
    mockUseFlash = jest.fn(() => ({
      flash: null,
      clearFlash: mockClearFlash,
    }));
    (useFlash as jest.Mock).mockImplementation(mockUseFlash);
  });

  it('should not render anything if there is no flash message', () => {
    render(<FlashComponent />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('should render a flash message with the correct text and severity', () => {
    (useFlash as jest.Mock).mockReturnValue({
      flash: { message: 'Success!', type: 'success' },
      clearFlash: mockClearFlash,
    });

    render(<FlashComponent />);
    expect(screen.getByRole('alert')).toHaveTextContent('Success!');
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-root'); // MUI class check
  });

  it('should close the alert when close button is clicked', () => {
    (useFlash as jest.Mock).mockReturnValue({
      flash: { message: 'Error occurred', type: 'error' },
      clearFlash: mockClearFlash,
    });

    render(<FlashComponent />);
    const closeButton = screen.getByRole('button', { name: /close/i });

    fireEvent.click(closeButton);

    expect(mockClearFlash).toHaveBeenCalledTimes(1);
  });

  it('should auto-dismiss the flash message after 5 seconds', () => {
    jest.useFakeTimers();

    (useFlash as jest.Mock).mockReturnValue({
      flash: { message: 'Auto-dismiss test', type: 'info' },
      clearFlash: mockClearFlash,
    });

    render(<FlashComponent />);

    expect(screen.getByRole('alert')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(mockClearFlash).toHaveBeenCalledTimes(1);
  });

  it('should keep the alert visible before 5 seconds and disappear afterward', () => {
    jest.useFakeTimers();

    (useFlash as jest.Mock).mockReturnValue({
      flash: { message: 'Delayed test', type: 'warning' },
      clearFlash: mockClearFlash,
    });

    render(<FlashComponent />);

    expect(screen.getByRole('alert')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByRole('alert')).toBeInTheDocument(); // Still visible

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(mockClearFlash).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
  });
});
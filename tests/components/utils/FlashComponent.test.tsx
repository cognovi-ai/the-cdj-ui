import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { FlashComponent } from '../../../src/components/utils/FlashComponent';
import React from 'react';
import { useFlash } from '../../../src/contexts/useFlash';

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
    jest.useFakeTimers();
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
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-root');
  });

  it('should close the alert when close button is clicked', () => {
    (useFlash as jest.Mock).mockReturnValue({
      flash: { message: 'Error occurred', type: 'error' },
      clearFlash: mockClearFlash,
    });

    render(<FlashComponent />);
    const closeButton = screen.getByRole('button', { name: /close/i });

    act(() => {
      fireEvent.click(closeButton);
    });

    act(() => {
      jest.runAllTimers();
    });

    expect(mockClearFlash).toHaveBeenCalledTimes(1);
  });

  it('should auto-dismiss short messages after 5 seconds', async () => {
    (useFlash as jest.Mock).mockReturnValue({
      flash: { message: 'Short msg', type: 'info' },
      clearFlash: mockClearFlash,
    });

    render(<FlashComponent />);
    expect(screen.getByRole('alert')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => expect(mockClearFlash).toHaveBeenCalledTimes(1));
  });

  it('should auto-dismiss long messages after dynamically calculated time', async () => {
    const longMessage =
      'This is a really long message that should stay visible longer because the user needs more time to read it.';
  
    const expectedTimeout = Math.min(5000 + longMessage.length * 50, 15000);
  
    (useFlash as jest.Mock).mockReturnValue({
      flash: { message: longMessage, type: 'warning' },
      clearFlash: mockClearFlash,
    });
  
    render(<FlashComponent />);
  
    expect(screen.getByRole('alert')).toBeInTheDocument();
  
    act(() => {
      jest.advanceTimersByTime(expectedTimeout - 1000);
    });
  
    expect(screen.queryByRole('alert')).toBeInTheDocument();
  
    act(() => {
      jest.advanceTimersByTime(1000);
    });
  
    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument());
  
    expect(mockClearFlash).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
  });
});
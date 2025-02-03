import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Cookies from 'js-cookie';
import LoginForm from '../../../src/components/access/LoginForm';
import React from 'react';
import { useAccess } from '../../../src/hooks/useAccess';
import { useJournal } from '../../../src/contexts/useJournal';
import { useRouter } from 'next/navigation';


// Mock dependencies
jest.mock('../../../src/hooks/useAccess');
jest.mock('../../../src/contexts/useJournal');
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
jest.mock('js-cookie', () => ({
  set: jest.fn(),
}));

describe('LoginForm', () => {
  let mockRequest: jest.Mock;
  let mockSetJournalId: jest.Mock;
  let mockSetJournalTitle: jest.Mock;
  let mockPush: jest.Mock;
  
  beforeEach(() => {
    mockRequest = jest.fn();
    mockSetJournalId = jest.fn();
    mockSetJournalTitle = jest.fn();
    mockPush = jest.fn();
  
    (useAccess as jest.Mock).mockReturnValue({ request: mockRequest });
    (useJournal as jest.Mock).mockReturnValue({
      setJournalId: mockSetJournalId,
      setJournalTitle: mockSetJournalTitle,
    });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  
    jest.clearAllMocks();
  });
  
  const fillAndSubmitForm = async (email: string, password: string) => {
    fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: email } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: password } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
  };
  
  test('renders login form correctly', () => {
    render(<LoginForm />);
  
    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });
  
  test('updates input fields when typing', () => {
    render(<LoginForm />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
  
    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });
  
  test('handles successful login', async () => {
    mockRequest.mockResolvedValue({
      token: 'mock-token',
      journalId: '123',
      journalTitle: 'My Journal',
    });
  
    render(<LoginForm />);
    await fillAndSubmitForm('test@example.com', 'password123');
  
    await waitFor(() => expect(mockRequest).toHaveBeenCalledTimes(1));
    expect(mockSetJournalId).toHaveBeenCalledWith('123');
    expect(mockSetJournalTitle).toHaveBeenCalledWith('My Journal');
    expect(Cookies.set).toHaveBeenCalledWith('authToken', 'mock-token', expect.any(Object));
    expect(mockPush).toHaveBeenCalledWith('/index');
  });
  
  test('shows error message on login failure', async () => {
    mockRequest.mockRejectedValue(new Error('Invalid credentials'));
  
    render(<LoginForm />);
    await fillAndSubmitForm('wrong@example.com', 'wrongpassword');
  
    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });
  
  test('checkbox updates state correctly', () => {
    render(<LoginForm />);
    const checkbox = screen.getByLabelText(/remember me/i);
  
    fireEvent.click(checkbox);
  
    expect(checkbox).toBeChecked();
  });
});
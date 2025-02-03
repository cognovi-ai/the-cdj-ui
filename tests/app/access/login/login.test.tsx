import { JournalProvider } from '../../../../src/contexts/JournalProvider'; 
import Login from '../../../../src/app/(access)/login/page'; 
import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

test('renders Login page without crashing', () => {
  (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });

  render(
    <JournalProvider>
      <Login />
    </JournalProvider>
  );
});

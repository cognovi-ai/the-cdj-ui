import ForgotPassword from '../../../../src/app/(access)/forgot-password/page';
import React from 'react';
import { render } from '@testing-library/react';

describe('Forgot Password Page', () => {
  it('renders the ForgotPassword component without crashing', () => {
    expect(() => render(<ForgotPassword />)).not.toThrow();
  });
});

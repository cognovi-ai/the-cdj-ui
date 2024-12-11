import React from 'react';
import ResetPassword from '../../../../src/app/(access)/reset-password/page';
import { render } from '@testing-library/react';

describe('Reset Password Page', () => {
  it('renders the ResetPassword component without crashing', () => {
    expect(() => render(<ResetPassword />)).not.toThrow();
  });
});

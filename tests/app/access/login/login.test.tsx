import Login from '../../../../src/app/(access)/login/page';
import React from 'react';
import { render } from '@testing-library/react';

describe('Login Page', () => {
  it('renders the Login component without crashing', () => {
    expect(() => render(<Login />)).not.toThrow();
  });
});

import React from 'react';
import Register from '../../../../src/app/(access)/register/page';
import { render } from '@testing-library/react';

describe('Register Page', () => {
  it('renders the Register component without crashing', () => {
    expect(() => render(<Register />)).not.toThrow();
  });
});

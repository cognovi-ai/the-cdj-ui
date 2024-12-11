import Account from '../../../../src/app/(access)/account/page';
import React from 'react';
import { render } from '@testing-library/react';

describe('Account Page', () => {
  it('renders the Account component without crashing', () => {
    expect(() => render(<Account />)).not.toThrow();
  });
});

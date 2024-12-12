import Index from '../../../src/app/(entry)/index/page';
import React from 'react';
import { render } from '@testing-library/react';

describe('Index Page', () => {
  it('renders the Index component', () => {
    expect(() => render(<Index />)).not.toThrow();
  });
});

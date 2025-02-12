import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { FlashProvider } from '../../src/contexts/FlashProvider';
import React from 'react';
import { useFlash } from '../../src/contexts/useFlash';

// A test component to interact with the FlashContext
const TestComponent = () => {
  const { flash, setFlash, clearFlash, processFlash } = useFlash();

  return (
    <div>
      <button onClick={() => setFlash({ type: 'success', message: 'Success!' })}>Set Success Flash</button>
      <button onClick={() => setFlash({ type: 'warning', message: 'Warning!' })}>Set Warning Flash</button>
      <button onClick={() => setFlash({ type: 'info', message: 'Information!' })}>Set Info Flash</button>
      <button onClick={clearFlash}>Clear Flash</button>
      <button onClick={() => processFlash({ flash: { error: ['Error occurred!'] } })}>Process Error Flash</button>
      <button onClick={() => processFlash({ flash: { warning: ['Warning alert!'] } })}>Process Warning Flash</button>
      <button onClick={() => processFlash({ message: JSON.stringify({ info: ['Info message!'] }) })}>Process JSON Without Flash</button>
      <button onClick={() => processFlash({ message: JSON.stringify({ flash: { success: [], error: [] } }) })}>Process Empty Messages</button>
      <button onClick={() => processFlash({ flash: { error: ['First error'], success: ['Second success'] } })}>Process Multiple Flash Types</button>
      {flash && <div data-testid="flash-message">{flash.message}</div>}
    </div>
  );
};

describe('FlashContext', () => {
  test('sets a success flash message', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Set Success Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('Success!');
  });

  test('sets a warning flash message', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Set Warning Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('Warning!');
  });

  test('sets an info flash message', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Set Info Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('Information!');
  });

  test('clears the flash message', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Set Success Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('Success!');

    act(() => {
      screen.getByText('Clear Flash').click();
    });

    expect(screen.queryByTestId('flash-message')).toBeNull();
  });

  test('processes flash data and sets an error message', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Process Error Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('Error occurred!');
  });

  test('processes flash data and sets a warning message', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Process Warning Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('Warning alert!');
  });

  test('handles JSON without flash property', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Process JSON Without Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('An unexpected error occurred.');
  });

  test('handles empty messages gracefully', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Process Empty Messages').click();
    });

    expect(screen.queryByTestId('flash-message')).toBeNull();
  });

  test('handles multiple flash types correctly', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Process Multiple Flash Types').click();
    });

    // The last message processed should be the success message
    expect(screen.getByTestId('flash-message')).toHaveTextContent('Second success');
  });

  test('throws an error when useFlash is used outside of FlashProvider', () => {
    const ConsoleError = console.error;
    console.error = jest.fn(); // Suppress expected error in test output

    const TestWithoutProvider = () => {
      useFlash();
      return <div>Test</div>;
    };

    expect(() => render(<TestWithoutProvider />)).toThrow('useFlash must be used within a FlashProvider');

    console.error = ConsoleError;
  });

  test('handles multiple flash messages in sequence', () => {
    render(
      <FlashProvider>
        <TestComponent />
      </FlashProvider>
    );

    act(() => {
      screen.getByText('Set Success Flash').click();
      screen.getByText('Set Warning Flash').click();
    });

    expect(screen.getByTestId('flash-message')).toHaveTextContent('Warning!');
  });
});

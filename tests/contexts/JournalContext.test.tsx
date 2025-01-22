import { fireEvent, render, screen } from '@testing-library/react';
import { JournalProvider } from '../../src/contexts/JournalProvider';
import React from 'react';
import { useJournal } from '../../src/contexts/useJournal';

const ContextConsumerComponent: React.FC = () => {
  const { journalId, setJournalId } = useJournal();

  return (
    <div>
      <p data-testid="journal-id">{journalId}</p>
      <button
        onClick={() => setJournalId('updated-journal-id')}
        data-testid="update-id-button"
      >
        Update Journal ID
      </button>
    </div>
  );
};

describe('JournalContext', () => {
  it('throws an error when useJournal is used outside JournalProvider', () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const InvalidComponent = () => {
      try {
        useJournal();
      } catch (error) {
        throw error;
      }
      return null;
    };

    expect(() => render(<InvalidComponent />)).toThrow(
      'useJournal must be used within a JournalProvider'
    );

    consoleError.mockRestore();
  });

  it('provides journalId and updates it correctly using context', () => {
    render(
      <JournalProvider>
        <ContextConsumerComponent />
      </JournalProvider>
    );

    const journalIdElement = screen.getByTestId('journal-id');
    expect(journalIdElement.textContent).toBe('');

    const updateButton = screen.getByTestId('update-id-button');
    fireEvent.click(updateButton);

    expect(journalIdElement.textContent).toBe('updated-journal-id');
  });
});

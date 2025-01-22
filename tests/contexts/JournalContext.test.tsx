import { fireEvent, render, screen } from '@testing-library/react';
import { JournalProvider } from '../../src/contexts/JournalProvider';
import React from 'react';
import { useJournal } from '../../src/contexts/useJournal';

const ContextConsumerComponent: React.FC = () => {
  const { journalId, setJournalId, journalTitle, setJournalTitle } =
    useJournal();

  return (
    <div>
      <p data-testid="journal-id">{journalId}</p>
      <button
        onClick={() => setJournalId('updated-journal-id')}
        data-testid="update-id-button"
      >
        Update Journal ID
      </button>
      <p data-testid="journal-title">{journalTitle}</p>
      <button
        onClick={() => setJournalTitle('updated-journal-title')}
        data-testid="update-title-button"
      >
        Update Journal Title
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

    const updateIdButton = screen.getByTestId('update-id-button');
    fireEvent.click(updateIdButton);

    expect(journalIdElement.textContent).toBe('updated-journal-id');
  });

  it('provides journalTitle and updates it correctly using context', () => {
    render(
      <JournalProvider>
        <ContextConsumerComponent />
      </JournalProvider>
    );

    // Test journalTitle
    const journalTitleElement = screen.getByTestId('journal-title');
    expect(journalTitleElement.textContent).toBe('');

    const updateTitleButton = screen.getByTestId('update-title-button');
    fireEvent.click(updateTitleButton);

    expect(journalTitleElement.textContent).toBe('updated-journal-title');
  });
});

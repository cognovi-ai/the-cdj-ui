'use client';
import React, { useState } from 'react';
import { JournalContext } from './JournalContext';

/**
 * Props for the `JournalProvider` component.
 * @typeParam children - The child components that will have access to the 
 * Journal context.
 */
interface JournalProviderProps {
  children: React.ReactNode;
}

/**
 * The `JournalProvider` component wraps its children with a `JournalContext` 
 * providing access to the journal id, title, and their respective 
 * setter functions.
 * @param children - The child components to wrap with the Journal context.
 */
export const JournalProvider: React.FC<JournalProviderProps> = ({
  children,
}) => {
  const [journalId, setJournalId] = useState<string>('');
  const [journalTitle, setJournalTitle] = useState<string>('');

  return (
    <JournalContext.Provider 
      value={
        {
          journalId,
          setJournalId,
          journalTitle,
          setJournalTitle,
        }
      }>
      {children}
    </JournalContext.Provider>
  );
};

'use client';
import React, { useState } from 'react';
import { JournalContext } from './JournalContext';

/**
 * Props for the `JournalProvider` component.
 * @typeParam children - The child components that will have access to the Journal context.
 */
interface JournalProviderProps {
  children: React.ReactNode;
}

/**
 * The `JournalProvider` component wraps its children with a `JournalContext.Provider`,
 * providing access to the journal id, title, and their respective setter functions.
 *
 * @param children - The child components to render.
 */
export const JournalProvider: React.FC<JournalProviderProps> = ({
  children,
}) => {
  const [journalId, setJournalId] = useState<string>('');
  const [journalTitle, setJournalTitle] = useState<string>('');

  /**
   * The value provided by the `JournalContext` to its consumers.
   * Includes both `journalId` and `journalTitle` with their setter functions.

   */
  const value = {
    journalId,
    setJournalId,
    journalTitle,
    setJournalTitle,
  };

  return (
    <JournalContext.Provider value={value}>{children}</JournalContext.Provider>
  );
};

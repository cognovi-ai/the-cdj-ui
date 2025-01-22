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
 * providing access to the journal ID and its setter function.
 *
 * @param children - The child components to render.
 */
export const JournalProvider: React.FC<JournalProviderProps> = ({
  children,
}) => {
  const [journalId, setJournalId] = useState<string>('');

  /**
   * The value provided by the `JournalContext` to its consumers.
   */
  const value = {
    journalId,
    setJournalId,
  };

  return (
    <JournalContext.Provider value={value}>{children}</JournalContext.Provider>
  );
};

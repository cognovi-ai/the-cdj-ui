'use client';
import { FlashContext, FlashContextType, FlashMessage } from './FlashContext';
import { ReactNode, useCallback, useState } from 'react';
import React from 'react';

/**
 * The props for the FlashProvider component.
 * @typeParam children - The React children.
 */
interface FlashProviderProps {
  children: ReactNode;
}

/**
 * The provider for the flash feature.
 * @param children - The React children.
 * @returns The React component.
 */
export const FlashProvider = ({ children }: FlashProviderProps) => {
  const [flash, setFlash] = useState<FlashMessage | null>(null);

  /**
   * A function to clear the flash message.
   */
  const clearFlash = useCallback(() => setFlash(null), []);

  /**
   * A function to handle flash messages.
   * @param flashData - The flash
   * data to process.
   * @returns The processed flash messages.
   */
  const handleFlashMessages = (flashData: any) => {
    Object.entries(flashData).forEach(([type, messages]) => {
      if (['success', 'error', 'info', 'warning'].includes(type)) {
        (messages as string[]).forEach((message) => {
          setFlash({ type: type as FlashMessage['type'], message });
        });
      }
    });
  };

  /**
   * A function to process flash messages.
   * @param data - The data to process.
   */
  const processFlash = useCallback((data: any) => {
    try {
      if (data?.flash) {
        handleFlashMessages(data.flash);
      }

      if (typeof data?.message === 'string') {
        try {
          const parsedMessage = JSON.parse(data.message);
          if (parsedMessage?.flash) {
            handleFlashMessages(parsedMessage.flash);
          } else {
            setFlash({ type: 'error', message: 'An unexpected error occurred.' });
          }
        } catch {
          setFlash({ type: 'error', message: 'An unexpected error occurred.' });
        }
      }
    } catch {
      setFlash({ type: 'error', message: 'An unexpected error occurred.' });
    }
  }, []);

  const value: FlashContextType = {
    flash,
    setFlash,
    clearFlash,
    processFlash,
  };

  return (
    <FlashContext.Provider value={value}>{children}</FlashContext.Provider>
  );
};
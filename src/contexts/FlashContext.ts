import { createContext } from 'react';

/**
 * The type for the flash message.
 * @typeParam success - A successful flash message.
 * @typeParam error - An error flash message.
 * @typeParam info - An informational flash message.
 */
export type FlashMessageType = 'success' | 'error' | 'info' | 'warning';

/**
 * The type for the flash message.
 * @typeParam type - The type of flash message.
 * @typeParam message - The message to display.
 */
export interface FlashMessage {
  type: FlashMessageType; 
  message: string;
}

/**
 * The context type for the Flash.
 * @typeParam flash - The current flash message.
 * @typeParam setFlash - A function to update the flash.
 * @typeParam clearFlash - A function to clear the flash.
 * @typeParam processFlash - A function to process flash messages.
 */
export interface FlashContextType {
  flash: FlashMessage | null;
  setFlash: (value: FlashMessage) => void;
  clearFlash: () => void;
  processFlash: (data: any) => void;
}

/**
 * The React Context for the flash feature providing access to the 
 * `flash`, `setFlash` and `clearFlash` functions.
 */
export const FlashContext = createContext<FlashContextType | undefined>(
  undefined
);

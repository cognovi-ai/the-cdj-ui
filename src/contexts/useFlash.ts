import { FlashContext } from './FlashContext';
import { useContext } from 'react';

/**
 * Custom hook to access the Flash context within a `FlashProvider`.
 * @returns The `flash`, `setFlash`, `clearFlash` and `processFlash` from the `FlashContext`.
 * @throws An error if used outside a `FlashProvider`.
 */
export const useFlash = () => {
  const context = useContext(FlashContext);
  if (!context) {
    throw new Error('useFlash must be used within a FlashProvider');
  }
  return context;
};
'use client';
import { Alert, IconButton, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FlashMessage } from '@/contexts/FlashContext';
import React from 'react';
import { useFlash } from '../../contexts/useFlash';

/**
 * A component that displays a flash message using MUI's `Alert` and `Snackbar`.
 * Automatically dismisses after a duration dynamically 
 * calculated based on message length.
 * @see {@link https://mui.com/material-ui/react-alert/|MUI Alert}
 * @see {@link https://mui.com/material-ui/api/collapse/|MUI Collapse}
 */
export const FlashComponent = () => {
  const { flash, clearFlash } = useFlash();
  const [messages, setMessages] = useState<FlashMessage[]>([]);

  useEffect(() => {
    if (flash) {
      setMessages((prevMessages) => [...prevMessages, flash]);

      const timeout = Math.min(5000 + flash.message.length * 50, 15000);

      const timer = setTimeout(() => {
        setMessages((prevMessages) => prevMessages.slice(1));
        clearFlash();
      }, timeout);

      return () => clearTimeout(timer); 
    }
  }, [flash, clearFlash]);

  return (
    <>
      {messages.map((msg, index) => {
        const autoHideDuration = Math.min(5000 + msg.message.length * 50, 15000);

        return (
          <Snackbar
            key={index}
            open={true}
            autoHideDuration={autoHideDuration}
            onClose={() => setMessages((prev) => prev.filter((_, i) => i !== index))}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{
              width: '100%',
              maxWidth: 'calc(100vw - 40px)',
              margin: '0 auto',
            }}
          >
            <Alert
              severity={msg.type}
              sx={{
                width: '100%',
                borderRadius: 1,
              }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setMessages((prev) => prev.filter((_, i) => i !== index))}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              {msg.message}
            </Alert>
          </Snackbar>
        );
      })}
    </>
  );
};
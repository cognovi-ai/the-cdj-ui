'use client';
import { Alert, Collapse, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useFlash } from '../../contexts/useFlash';

/**
 * A component that displays a flash message using MUI's `Alert` API.
 * Automatically dismisses after 5 seconds or can be manually closed.
 * Uses Material-UI's `Collapse` for animation and `Alert` for displaying messages.
 * @see {@link https://mui.com/material-ui/react-alert/|MUI Alert}
 * @see {@link https://mui.com/material-ui/api/collapse/|MUI Collapse}
 */

export const FlashComponent = () => {
  const { flash, clearFlash } = useFlash();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (flash) {
      setOpen(true);

      const timer = setTimeout(() => {
        setOpen(false);
        clearFlash();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [flash, clearFlash]);

  if (!flash) return null;

  return (
    <Collapse in={open}>
      <Alert
        severity={flash.type}
        sx={{ margin: '1rem' }}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
              clearFlash();
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {flash.message}
      </Alert>
    </Collapse>
  );
};
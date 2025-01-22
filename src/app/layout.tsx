import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { CssBaseline } from '@mui/material';
import { JournalProvider } from '../contexts/JournalProvider';
import React from 'react';
import { ThemeProvider } from '../theme/ThemeContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <CssBaseline />
          <JournalProvider>
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </JournalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

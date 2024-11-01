import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif, ',
    body1: {
      color: 'var(--common-white_states-main, #FFF)',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    body2: {
      color: '#FFFFFF',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.15px',
    },
    h1: {
      color: 'var(--common-white_states-main, #FFF)',
      fontFamily: 'Roboto',
      fontSize: '30px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    h2: {
      color: 'var(--common-white_states-main, #FFF)',
      fontFamily: 'Roboto',
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '32px',
      letterSpacing: '0.1px',
    },
    h3: {
      color: 'var(--common-white_states-main, #FFF)',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '28px',
      letterSpacing: '0.1px',
    },
    subtitle1: {
      color: '#D9D9D9',
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    subtitle2: {
      color: '#8F8C8C',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.1px',
    },
    caption: {
      color: '#8F8C8C',
      fontFamily: 'Roboto',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
    overline: {
      color: '#8F8C8C',
      fontFamily: 'Roboto',
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase' as const,
    },
  },
};

export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: { main: '#282828' },
    secondary: { main: '#8F8C8C' },
    background: { default: '#D9D9D9', paper: '#fff' },
    text: {
      primary: '#000000',
      secondary: '#282828',
    },
  },
});

export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: { main: '#FFFFFF' },
    secondary: { main: '#8F8C8C' },
    background: {
      default: '#000000',
      paper: '#161616',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D9D9D9',
    },
    divider: '#282828',
  },
});

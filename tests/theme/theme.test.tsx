import '@testing-library/jest-dom';
import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../../src/theme/ThemeContext';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { darkTheme, lightTheme } from '../../src/theme/theme';
import { useTheme } from '@mui/material/styles';

const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

const TestThemeComponent = () => {
  const theme = useTheme();
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <p data-testid="theme-mode">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <p data-testid="primary-color">{theme.palette.primary.main}</p>
      <p data-testid="background-color">{theme.palette.background.default}</p>
      <p data-testid="text-color">{theme.palette.text.primary}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider functionality', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  const renderWithThemeProvider = () =>
    render(
      <ThemeProvider>
        <TestThemeComponent />
      </ThemeProvider>
    );

  describe('Initial Render', () => {
    it('renders in light mode by default when no theme is stored', () => {
      renderWithThemeProvider();
      expect(screen.getByTestId('theme-mode')).toHaveTextContent('Light Mode');
      expect(localStorage.getItem('theme')).toBeNull();
    });

    it('loads dark theme from localStorage on initial render', async () => {
      localStorage.setItem('theme', 'dark');
      await act(async () => {
        renderWithThemeProvider();
      });
      expect(screen.getByTestId('theme-mode')).toHaveTextContent('Dark Mode');
    });

    it('loads light theme from localStorage on initial render', async () => {
      localStorage.setItem('theme', 'light');
      await act(async () => {
        renderWithThemeProvider();
      });
      expect(screen.getByTestId('theme-mode')).toHaveTextContent('Light Mode');
    });
  });

  describe('Theme Toggle Functionality', () => {
    it('toggles from light to dark mode', async () => {
      renderWithThemeProvider();

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });

      expect(screen.getByTestId('theme-mode')).toHaveTextContent('Dark Mode');
      expect(localStorage.getItem('theme')).toBe('dark');
    });

    it('toggles from dark to light mode', async () => {
      localStorage.setItem('theme', 'dark');
      renderWithThemeProvider();

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });

      expect(screen.getByTestId('theme-mode')).toHaveTextContent('Light Mode');
      expect(localStorage.getItem('theme')).toBe('light');
    });

    it('persists theme choice across multiple toggles', async () => {
      renderWithThemeProvider();

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });
      expect(localStorage.getItem('theme')).toBe('dark');

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });
      expect(localStorage.getItem('theme')).toBe('light');
    });
  });

  describe('Theme Properties', () => {
    it('applies correct light theme properties', () => {
      renderWithThemeProvider();

      expect(screen.getByTestId('primary-color')).toHaveTextContent(
        lightTheme.palette.primary.main
      );
      expect(screen.getByTestId('background-color')).toHaveTextContent(
        lightTheme.palette.background.default
      );
      expect(screen.getByTestId('text-color')).toHaveTextContent(
        lightTheme.palette.text.primary
      );
    });

    it('applies correct dark theme properties', async () => {
      renderWithThemeProvider();

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });

      expect(screen.getByTestId('primary-color')).toHaveTextContent(
        darkTheme.palette.primary.main
      );
      expect(screen.getByTestId('background-color')).toHaveTextContent(
        darkTheme.palette.background.default
      );
      expect(screen.getByTestId('text-color')).toHaveTextContent(
        darkTheme.palette.text.primary
      );
    });

    it('maintains theme properties after multiple toggles', async () => {
      renderWithThemeProvider();

      expect(screen.getByTestId('primary-color')).toHaveTextContent(
        lightTheme.palette.primary.main
      );

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });
      expect(screen.getByTestId('primary-color')).toHaveTextContent(
        darkTheme.palette.primary.main
      );

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });
      expect(screen.getByTestId('primary-color')).toHaveTextContent(
        lightTheme.palette.primary.main
      );
    });
  });

  describe('Theme Context', () => {
    it('provides isDarkMode value through context', () => {
      renderWithThemeProvider();
      expect(screen.getByTestId('theme-mode')).toHaveTextContent('Light Mode');
    });

    it('updates context value when theme changes', async () => {
      renderWithThemeProvider();

      await act(async () => {
        fireEvent.click(screen.getByText('Toggle Theme'));
      });

      expect(screen.getByTestId('theme-mode')).toHaveTextContent('Dark Mode');
    });
  });
});

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define the type for the theme
type Theme = 'professional' | 'fun';

// Define the shape of the context value
interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<IThemeContext | null>(null);

// Custom hook to use the ThemeContext easily
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Define the props for our provider component
interface ThemeProviderProps {
  children: ReactNode;
}

// The Provider component that will wrap our app
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('professional');

  useEffect(() => {
    // This side-effect runs whenever the theme state changes
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'professional' ? 'fun' : 'professional'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
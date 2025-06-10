import { useTheme } from '../context/ThemeContext';
import { FaPaintBrush, FaBriefcase } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-text-primary bg-primary hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-accent focus:ring-offset-background"
      aria-label={`Switch to ${theme === 'professional' ? 'fun' : 'professional'} mode`}
    >
      {theme === 'professional' ? <FaPaintBrush size={20} /> : <FaBriefcase size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
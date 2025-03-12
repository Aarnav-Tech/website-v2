import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ThemeSwitcher(): JSX.Element {
  const { colorMode, setColorMode } = useColorMode();

  const toggleTheme = (): void => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Toggle theme"
    >
      {colorMode === 'light' ? '🌜' : '🌞'}
    </button>
  );
}
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';
import styles from './style.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={styles.menu}>
      <RouterLink
        href="/"
        className={styles.menuLink}
        aria-label="Página Inicial"
        title="Página Inicial"
      >
        <HouseIcon />
      </RouterLink>

      <RouterLink
        href="/history"
        className={styles.menuLink}
        aria-label="Histórico"
        title="Histórico"
      >
        <HistoryIcon />
      </RouterLink>

      <RouterLink
        href="/settings"
        className={styles.menuLink}
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </RouterLink>

      <a
        href="#"
        className={styles.menuLink}
        aria-label="Tema"
        title="Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}

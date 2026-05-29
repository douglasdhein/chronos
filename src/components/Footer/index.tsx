import styles from './style.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about">Entenda a técnica pomodoro.</RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Douglas Dhein.
      </RouterLink>
    </footer>
  );
}

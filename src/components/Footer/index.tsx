import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda a técnica pomodoro.</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Douglas Dhein.
      </a>
    </footer>
  );
}

import { Fragment } from 'react/jsx-runtime';
import styles from './style.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <Fragment>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </Fragment>
  );
}

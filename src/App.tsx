import { Fragment } from 'react/jsx-runtime';
import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <Fragment>
      <Heading>Heading</Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eos
        soluta illo pariatur atque aspernatur molestiae at sunt aliquid eveniet,
        adipisci quo cumque, iste sed autem tempora nostrum dolorem eius!
      </p>
    </Fragment>
  );
}

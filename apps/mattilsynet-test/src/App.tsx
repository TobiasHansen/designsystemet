import { Heading } from '@digdir/designsystemet-react';
import './App.css';
import { Buttons } from './components/buttons.tsx';

function App() {
  return (
    <>
      <Heading>Mattilsynet test</Heading>
      <Buttons variant='primary' />
      <Buttons variant='secondary' />
      <Buttons variant='tertiary' />
    </>
  );
}

export default App;

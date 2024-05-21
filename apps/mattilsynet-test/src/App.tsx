import { Button, Heading } from '@digdir/designsystemet-react';
import './App.css';
import { ModalForwardRef } from './components/modal-forward-ref.tsx';
import { useRef } from 'react';

function App() {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Heading>Mattilsynet test</Heading>
      {/*<Buttons variant='primary' />*/}
      {/*<Buttons variant='secondary' />*/}
      {/*<Buttons variant='tertiary' />*/}
      <Button
        onClick={() => {
          modalRef.current?.showModal();
        }}
      >
        Open modal
      </Button>
      <ModalForwardRef
        ref={modalRef}
        onClose={() => {
          console.log('onClose app');
        }}
        onOk={() => {
          console.log('onOk app');
        }}
      />
    </>
  );
}

export default App;

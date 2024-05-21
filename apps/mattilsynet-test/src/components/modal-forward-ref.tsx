import { Button, Modal, Paragraph } from '@digdir/designsystemet-react';
import { forwardRef } from 'react';

interface Props {
  onClose: () => void;
  onOk: () => void;
}

export const ModalForwardRef = forwardRef<HTMLDialogElement, Props>(
  ({ onClose, onOk }, ref) => {
    return (
      <Modal.Root>
        <Modal.Dialog
          ref={ref}
          onClose={() => {
            console.log('onClose');
            onClose();
          }}
          onInteractOutside={() => {
            console.log('onInteractOutside');
            onClose();
          }}
        >
          <Modal.Header>Titel</Modal.Header>
          <Modal.Content>
            <Paragraph>Message</Paragraph>
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={onOk}>OK</Button>
            <Button
              variant='secondary'
              onClick={onClose}
            >
              CLOSE
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Root>
    );
  },
);

ModalForwardRef.displayName = 'ModalForwardRef';

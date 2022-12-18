import React, {useEffect, useMemo, useState} from 'react';

import {Modal} from 'react-native';

import {TestModal, TestModalProps} from 'src/components/modals';
import {app} from 'src/contexts';

type Test = {
  type: 'test';
} & TestModalProps;

type ModalState = Test | null;

export type ModalProps = {
  initialModal?: ModalState;
};

export function Modals({initialModal = null}: ModalProps) {
  const [modal, setModal] = useState<ModalState>(initialModal);

  useEffect(() => {
    const showModal = (event: ModalState) => {
      setModal(event);
      console.log('modal', JSON.stringify(event));
    };

    const hideModal = (event: {type: string | null}) => {
      setModal((currentModal: ModalState) => {
        if (!event.type || event.type === currentModal?.type) {
          return null;
        }

        return currentModal;
      });
    };

    app.on('modal', showModal);
    app.on('showModal', showModal);
    app.on('hideModal', hideModal);
    return () => {
      app.off('modal', showModal);
      app.off('showModal', showModal);
      app.off('hideModal', hideModal);
    };
  }, []);

  const onClose = () => {
    setModal(null);
    app.emit('onCloseTest');
  };

  const entry = useMemo(() => {
    if (!modal) {
      return null;
    }
    switch (modal.type) {
      case 'test':
        return <TestModal onClose={onClose} />;
      default:
        return null;
    }
  }, [modal]);

  return (
    <Modal animationType="none" visible={!!modal} transparent={true}>
      {entry}
    </Modal>
  );
}

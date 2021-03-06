import React from 'react';

import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

export type ModalProp = {
  children?: React.ReactNode;
  show: boolean;
  modalClicked: () => void;
};

const shouldComponentUpdate = (
  prevProps: Readonly<ModalProp>,
  nextProps: Readonly<ModalProp>
) => {
  return !(prevProps.show !== nextProps.show);
};

const Modal = (props: ModalProp) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClicked} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default React.memo(Modal, shouldComponentUpdate);

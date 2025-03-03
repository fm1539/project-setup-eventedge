import React from 'react';
import {useModalContext} from '../../lib/context/modal';
import {Modal} from '../modal';

// for testing purposes. delete later
const TestComp = () => <div>test</div>;

// {id: string; component: () => React.Component}
const REGISTERED_MODALS = [{id: 'test', component: () => <TestComp />}];

export const ModalRegistry = () => {
  const {hideModal, visibleModals} = useModalContext();

  const closeModal = (id) => () => hideModal(id);

  return REGISTERED_MODALS.filter(({id}) => visibleModals.includes(id)).map(
    ({id, component}) => (
      <Modal onClose={closeModal(id)} key={id}>
        {component()}
      </Modal>
    )
  );
};

import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";

const DeleteModal = ({ modal, setModal, handleSubmit }) => {
  return (
    <Modal
      title="Delete event"
      open={modal}
      onOk={handleSubmit}
      onCancel={() => setModal(false)}
    >
      Do you really want to delete the company?
    </Modal>
  );
};

DeleteModal.propTypes = {
  modal: PropTypes.bool,
  setModal: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default DeleteModal;

import React from 'react';
import { Modal,Button } from 'antd';
import "./modal.scss"

const ModalComponent = ({modalOpen,setModalOpen,sendStatus,setStatus,status}) => {
  return (
    <>
      <Modal
        title= 'Create a post'
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="submit" type="primary" disabled={status.length === 0} onClick={sendStatus}>
           Post
          </Button>,
        ]}
      >
      <input
        className="modal-input"
        onClick={sendStatus}
        type="text"
        placeholder="What do you want to talk about?"
        onChange={(event) =>setStatus(event.target.value)} 
        value={status}/>
      </Modal>
    </>
  );
};

export default ModalComponent



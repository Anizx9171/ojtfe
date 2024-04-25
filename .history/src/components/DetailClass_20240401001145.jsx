
"use client";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";

export default function DetailClass({data}) {
  const [openModal, setOpenModal] = useState(false);

  const [openModalClass, setOpenModalClass] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Xem</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="p-4" >{data?.name}</Modal.Header>
        <Modal.Body>
      
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>setOpenModalClass(true)}>
                Danh sách học sinh  
            </Button>
            <Modal show={openModalClass}>
                <ModalHeader>Danh sách học sinh</ModalHeader>
                <ModalBody></ModalBody>
            </Modal>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}

"use client";

import { Button, Modal, ModalBody, ModalHeader, Table } from "flowbite-react";
import { useState } from "react";

export default function DetailClass({ data }) {
  const [openModal, setOpenModal] = useState(false);

  const [openModalClass, setOpenModalClass] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Xem</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="p-4">{data?.name}</Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModalClass(true)}>
            Danh sách học sinh
          </Button>
          <Modal show={openModalClass} onClose={() => setOpenModalClass(false)}>
            <ModalHeader >Danh sách học sinh</ModalHeader>
            <ModalBody>
              <div className="overflow-x-auto">
                <Table>
                  <Table.Head>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Họ và Tên</Table.HeadCell>
                    <Table.HeadCell>SDT</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>DOB</Table.HeadCell>
                    
                  </Table.Head>
                  <Table.Body className="divide-y">
                  {
                    data?.students?.map((std)=>{
                        return(
                            <Table.Row key={std.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {'Apple MacBook Pro 17"'}
                      </Table.Cell>
                      <Table.Cell>{std.id}</Table.Cell>
                      <Table.Cell>{std.name}</Table.Cell>
                      <Table.Cell>$</Table.Cell>
                      <Table.Cell>Laptop</Table.Cell>
                      <Table.Cell>$2999</Table.Cell>
                    </Table.Row>
                        )
                    })
                  }
                   
             
                  </Table.Body>
                </Table>
              </div>
            </ModalBody>
          </Modal>
        </Modal.Footer>
      </Modal>
    </>
  );
}

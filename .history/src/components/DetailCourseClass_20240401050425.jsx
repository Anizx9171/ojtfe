import { Button, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchClassFromCourse} from "../features/courses/CourseSlice.js"

export default function DetailCourseClass({data}) {
    const [openModal11,setOpenModal11] =useState(false);
    const classes = useSelector(state=> state.courses.classes);
    const dispatch = useDispatch();

    // function handleOpenModal() {
    //     setOpenModal(true);
    //     dispatch(fetchClassFromCourse(data?.courseId));
    //   }
      const handleOpenModal=()=>{
        setOpenModal(true);
        dispatch(fetchClassFromCourse(data?.courseId));
      }


  return (
    <>
      <Button onClick={() => handleOpenModal}>Xem</Button>
      <Modal show={openModal11} onClose={() => setOpenModal1(false)}>
        <Modal.Header className="p-4">{data?.title}</Modal.Header>
        <Modal.Body>
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
                {classes?.map((std) => {
                  return (
                    <Table.Row
                      key={std.id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell>{std.id}</Table.Cell>
                      <Table.Cell>{std.name}</Table.Cell>
                      <Table.Cell>{std.maxStudent}</Table.Cell>
                      <Table.Cell>{std.startTime}</Table.Cell>
                      <Table.Cell>{std.teacher.name}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

import {  Button, Modal } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import  { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../features/moduleCourses/ModuleCourseSlice.js";
import { Modal as Modal1 } from "antd";

const ProductSchema = Yup.object().shape({
  moduleName: Yup.string().required("Required"),
  time: Yup.string().required("Required"),
  courseName: Yup.string().required("Required"),
});

// eslint-disable-next-line react/prop-types
export default function EditModuleCourseModal({data}) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handleCloseModal = () => setOpenModal(false);
  const error = useSelector((state) => state.moduleCourses.error);
  const formikRef = useRef();
  useEffect(() => {
    if (error && formikRef.current) {
      formikRef.current.setErrors({
        moduleName: error?.errorsDetails.moduleName,
        time: error?.errorsDetails.time,
        courseName: error?.errorsDetails.courseName,
      });
    }
  }, [error]);

  return (
    <>
      <Button style={{}} onClick={() => setOpenModal(true)}>Sửa</Button>
      <Modal show={openModal} size="md" onClose={handleCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sửa module
            </h3>

            <Formik
              innerRef={formikRef}
              initialValues={{
                moduleName: data?.moduleName,
                time: data?.time,
                courseName: data?.course?.title,
              }}
              validationSchema={ProductSchema}
              onSubmit={(values, actions) => {
                Modal1.confirm({
                  title: "Xác nhận thêm Module",
                  content: "Bạn chắc chắn với hành động này?",
                  onOk: () => {
                    dispatch(update({id:data?.id,data:values}))
                      .unwrap()
                      .then(() => {
                        actions.resetForm();
                        handleCloseModal();
                      })
                      .catch(() => {});
                  },
                  onCancel: () => {},
                });
              }}
            >
              {() => (
                <Form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tên module
                      </label>

                      <Field
                        type="text"
                        name="moduleName"
                        id="moduleName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                      <ErrorMessage
                        name="moduleName"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Thời lượng
                      </label>

                      <Field
                        type="number"
                        name="time"
                        id="time"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                      <ErrorMessage
                        name="time"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tên khóa học
                      </label>

                      <Field
                        type="text"
                        name="courseName"
                        id="courseName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required=""
                      />
                      <ErrorMessage
                        name="courseName"
                        component="div"
                        className="text-red-600 text-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sửa
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

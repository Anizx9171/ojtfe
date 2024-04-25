import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as Modal1 } from "antd";
import * as Yup from "yup";
import { editTeacher } from "../features/teachers/TeacherSlice.js";

const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phoneNumber: Yup.number().required("Required").positive().integer(),
    address: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
});

// eslint-disable-next-line react/prop-types
export default function EditTeacherModal({data}) {
  const error = useSelector((state) => state.teachers.error);
  const formikRef = useRef();
  console.log("er222222",error)

  const dispatch = useDispatch();
  useEffect(() => {
    if (error && formikRef.current) {
       
      formikRef.current.setErrors({
        name: error?.errorsDetails.name,
        email: error?.errorsDetails.email,
        phoneNumber: error?.errorsDetails.phoneNumber,
        address: error?.errorsDetails.address,
        dob: error?.errorsDetails.dob,
      });
    }
  }, [error]);

  return (
    <>
      {/* Modal toggle */}
 
      <div
        id="crud-modal-editTeacher"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Thêm mới
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal-editTeacher"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}

         

            {/* {showConfirmModal && (
              <Alert setShowConfirmModal={setShowConfirmModal} />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}

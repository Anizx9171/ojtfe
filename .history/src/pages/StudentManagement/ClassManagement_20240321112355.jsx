import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
// import Table from "../../components/Table";
import Add from "../../components/Add";
import Modal from "../../components/Modal";
import EditModal from "../../components/EditModal";
import BodyHeader from "../../components/BodyHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchClass,
  selectAllClass,
  deleteC,
  saveNewClass,
  edit,
} from "/src/features/classes/ClassSlice.js";
import { Link } from "react-router-dom";
// import {Loader} from "react-loader-spinner";
// import { TailSpin } from 'react-loader-spinner';

function ClassManagement() {
  const dispatch = useDispatch();

  const classes = useSelector((state) => state.classes.class);
  const fetchStatus = useSelector((state) => state.classes.status);
  const error = useSelector((state) => state.classes.error);
  const [status, setStatus] = useState("Inactive");

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchClass({ page: 0, size: 10 }));
    }
  }, [dispatch, fetchStatus]);

  const handleDelete = (classId) => {
    // Confirmation dialog để người dùng xác nhận trước khi xóa
    if (window.confirm("Are you sure you want to delete this class?")) {
      dispatch(deleteC(classId)); // store action
    }
  };

  const handleAdd = (value) => {
    dispatch(saveNewClass(value));
  };

  const handleEdit = ({ id, data }) => {
    dispatch(edit({ id, data }));
  };

  // console.log("classes", classes);

  // if (fetchStatus === "loading") {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <Loader
  //         type="TailSpin" // Có nhiều loại spinner khác nhau bạn có thể chọn
  //         color="#00BFFF" // Màu của spinner, bạn có thể tùy chỉnh
  //         height={100} // Chiều cao của spinner
  //         width={100} // Chiều rộng của spinner
  //       />
  //     </div>
  //   );
  // } else if (fetchStatus === "failed") {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      <Header />
      <SideBar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
            className="flex justify-center items-start "
          >
            <BodyHeader />
            <Modal onAdd={handleAdd} />
            <EditModal />
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Học sinh tối đa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên lớp
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thời gian bắt đầu
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Trạng thái
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Khóa học
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giảng viên
                  </th>
                  <th colSpan={2} className="text-center ">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {classes?.map((cls) => {
                  return (
                    <tr
                      key={cls.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {cls.id}
                      </th>
                      <td className="px-6 py-4">{cls.maxStudent}</td>
                      <td className="px-6 py-4">{cls.name}</td>

                      <td className="px-6 py-4">{cls.startTime}</td>

                      <td className="px-6 py-4">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked="Active"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                          {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Checked toggle
                          </span> */}
                        </label>
                      </td>
                      <td className="px-6 py-4">{cls.courses.title}</td>
                      <td className="px-6 py-4"></td>
                      {/* <td className="px-6 py-4">{cls.teacher.name}</td> */}

                      <td className="px-6 py-4 text-right">
                        <a
                          onClick={() => handleDelete(cls.id)}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </a>
                      </td>

                      <td>
                        {/* <Link
                          to="/editmodal"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link> */}

                        <>
                          <button
                            id="dropdownDelayButton"
                            data-dropdown-toggle="dropdownDelay"
                            data-dropdown-delay={500}
                            data-dropdown-trigger="click"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                          >
                            Dropdown hover{" "}
                            <svg
                              className="w-2.5 h-2.5 ms-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </button>
                          {/* Dropdown menu */}
                          <div
                            id="dropdownDelay"
                            className="z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Dashboard
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Settings
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Earnings
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Sign out
                                </a>
                              </li>
                            </ul>
                          </div>
                        </>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <table>
            <tr>
              <th>1</th>
            </tr>
            <tr>
              <td>
                <EditModal />
              </td>
            </tr>
          </table> */}

          <Pagination />
      

          {/* <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              defaultValue=""
              className="sr-only peer"
              defaultChecked="Active"
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Checked toggle
            </span>
          </label> */}
        </div>
      </div>
    </>
  );
}

export default ClassManagement;

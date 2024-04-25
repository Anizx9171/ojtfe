import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import AddClassModal from "../../components/AddClassModal";
import EditModal from "../../components/EditModal";
import EModal from "../../components/EModal";
import BodyHeader from "../../components/BodyHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchCourse,
  //   selectAllClass,
} from "../../features/courses/";
// import { Link } from "react-router-dom";
// import {Loader} from "react-loader-spinner";
// import { TailSpin } from 'react-loader-spinner';

function CourseManagement() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.course);
  const fetchStatus = useSelector((state) => state.students.status);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchCourse({ page: 0, size: 10, keyword }));
    }
  }, [dispatch, fetchStatus, courses, keyword]);

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
            <BodyHeader text={"Quản lý khóa học"} />
            <AddClassModal />
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              {/* THead */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tên khóa học
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Chi tiết
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Thời gian
                  </th>
                  <th colSpan={2} className="text-center ">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {courses?.map((cls) => {
                  return (
                    <tr
                      key={cls.courseId}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {cls.courseId}
                      </th>
                      <td className="px-6 py-4">{cls.title}</td>
                      <td className="px-6 py-4">{cls.description}</td>

                      <td className="px-6 py-4">{cls.courseTime}</td>
                      <td className="px-6 py-4">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked="Active"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                        </label>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Delete
                        </a>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          {
                            <button
                              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              type="button"
                              onClick={() => {
                                setData(cls);
                                document.getElementById("editButton").click();
                              }}
                            >
                              Edit
                            </button>
                          }
                        </a>
                      </td>
                    </tr>
                  );
                })}

                {/*  */}
                {
                  <button
                    style={{ display: "none" }}
                    id="popup-modal"
                    data-modal-target={`popup-modal-${9999}`}
                    data-modal-toggle={`popup-modal-${9999}`}
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Toggle modal 99999
                  </button>
                }
                {
                  <button
                    id="editButton"
                    style={{ display: "none" }}
                    data-modal-target="crud-modal-edit"
                    data-modal-toggle="crud-modal-edit"
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Add+
                  </button>
                }
              </tbody>
            </table>

            <EditModal data={data} />

            {<EModal data={data} />}
          </div>

          <Pagination />
        </div>
      </div>
    </>
  );
}

export default CourseManagement;

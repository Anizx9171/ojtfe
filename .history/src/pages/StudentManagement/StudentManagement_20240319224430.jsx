import Pagination from "../../components/Pagination";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Table from "../../components/Table";

function StudentManagement() {
  return (
    <>
      <Header />
      <SideBar />
      
      <Pagination />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">

        </div>
      </div>
    </>
  );
}

export default StudentManagement;

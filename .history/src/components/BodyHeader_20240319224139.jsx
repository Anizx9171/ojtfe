function BodyHeader(){
    return (

        import Pagination from "../../components/Pagination";
        import Header from "../../components/Header";
        import SideBar from "../../components/SideBar";
        import Table from "../../components/Table";
        
        function StudentManagement() {
          return (
            <>
                <Header/>
                <SideBar/>
                <Table/>
                <Pagination/>
            </>
          );
        }
        
        export default StudentManagement;
        
    );
}

export default BodyHeader;
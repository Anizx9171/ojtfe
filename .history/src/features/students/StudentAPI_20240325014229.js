import axiosInstance from "../../common/api/axiosConfig";


export const findAll = (page, size,keyword) => {
    return axiosInstance.get(`/api/students?page=${page}&size=${size}&keyword=${keyword}`);
  };

  export const edit = (id, data) => {
    return axiosInstance
  }
import axiosInstance from "../../common/api/axiosConfig";

export const saveClass = (data) => {
  return axiosInstance.post("/api/classes", data);
};

export const editClass = (id, data) => {
  return axiosInstance.put(`/api/classes/${id}`, data);
};
export const deleteClass = (id) => {
  return axiosInstance.delete(`/api/classes/${id}`);
};

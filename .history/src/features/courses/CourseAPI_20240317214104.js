import axiosInstance from "../../common/api/axiosConfig";
import axios from "/src/common/api/axiosConfig";

export const findAll = () => {
  return axiosInstance.get("/api/users"); //retorna todos os usuários cadastrados no ban
};

export const saveCourse = (data) =>{
    return  axios.post('/api/courses', data);//salva um novo curso
} 

export const deleteCourse = (data) =

import axiosInstance from "../../common/api/axiosConfig";
import axios from "/src/common/api/axiosConfig";

export const findAll = () => {
  return axiosInstance.get("ap/i/users"); //retorna todos os usuários cadastrados no ban
};

import axios from '/src/common/api/axiosConfig'

export const login = (data) => {
   return axios.post('/auth/login',data);
}
export default login;
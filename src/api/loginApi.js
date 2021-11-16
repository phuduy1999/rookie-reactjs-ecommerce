import axiosClient from "./axiosClient";

const loginApi = {

  login: (data) => {
    const url = '/login';
    return axiosClient.post(url, data, {
      baseURL: process.env.REACT_APP_API_URL_AUTH
    });
  },

  logout: (data) => {
    const url = '/logout';
    return axiosClient.post(url, data);
  },

  refreshToken: (data) => {
    const url = '/refreshToken';
    return axiosClient.post(url, data);
  },

  changePasswordTeacher: (data) => {
    const url = '/change-password-teacher';
    return axiosClient.post(url, data);
  },

}

export default loginApi;

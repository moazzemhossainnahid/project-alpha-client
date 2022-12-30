import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";

const primaryAxios = axios.create({
  baseURL: "http://localhost:5000/",
  // baseURL: "https://aspen-essentials-server.up.railway.app/api/v1/",
});
  
// request interceptor
primaryAxios.interceptors.request.use(
  function (config) {
    if (!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "authorizationToken"
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptor
primaryAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403 || error.response.status === 401) {
      signOut(auth);
      localStorage.removeItem("authorizationToken");
    }
    return Promise.reject(error);
  }
);

export default primaryAxios;

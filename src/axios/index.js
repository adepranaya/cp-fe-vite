import axios from "axios";
import store from "@/store.js";

const $axios = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    // Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
    "Content-Type": "application/json"
  }
});

//KONFIGURASINYA KITA PINDAHKAN MENGGUNAKAN INTERCEPTORS
$axios.interceptors.request.use(
  function(config) {
    const token = store.state.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function(error) {
    if (
      error.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    }
    return Promise.reject(error);
  }
);
$axios.CancelToken = axios.CancelToken;
$axios.isCancel = axios.isCancel;
export default $axios;

import axios from "axios";
import rateLimit from "axios-rate-limit";
import Swal from "sweetalert2";

const http = rateLimit(axios.create(), {
  maxRequests: 2,
  perMilliseconds: 1000,
  maxRPS: 2,
});

const token = localStorage.getItem("token") || null; // your auth token

if (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response !== undefined) {
      if (error.response.status === 401) {
        // if auth not falid remove token
        localStorage.removeItem("token");
        delete http.defaults.headers.common.Authorization;
        // redirect to logout pages
        window.location.href = "/logout";
      } else {
        const errMsg = error.response?.data?.messages;

        Swal.fire({
          title: "",
          html: errMsg ?? "Something wrong with our system...",
          icon: "error",
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    }
    return Promise.reject(error);
  }
);

export default http;

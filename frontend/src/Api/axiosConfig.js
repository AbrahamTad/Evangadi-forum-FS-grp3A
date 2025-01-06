import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://evangadi-forum-groupa-backend-5.onrender.com",
});

export default axiosBase;

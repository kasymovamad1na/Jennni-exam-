import axios from "axios";

const API = axios.create({
  baseURL: "https://html008.pythonanywhere.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
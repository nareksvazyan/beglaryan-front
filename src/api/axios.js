import axios from "axios";
import { apiUrl } from "../utils/urls";

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
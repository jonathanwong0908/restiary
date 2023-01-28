import axios from "axios";
import { SERVER_URL } from "@env";

const ApiManager = axios.create({
  baseURL: SERVER_URL,
  responseType: "json",
  withCredentials: true
});

export default ApiManager;
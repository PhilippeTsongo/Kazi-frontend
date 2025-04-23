import axios from "axios";

// Set up Axios instance with the base URL
const api = axios.create({
    baseURL: "http://127.0.0.1:8000", // loacal base URL/production base URL
});

const url = "localhost:5173";
export default url;


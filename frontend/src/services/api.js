import axios from "axios";

// Hardcoded basic auth for testing only
const username = "admin"; // MUST match backend BASIC_USER
const password = "12345"; // MUST match backend BASIC_PASS

const token = btoa(`${username}:${password}`);

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${token}`,
  },
});

export default api;

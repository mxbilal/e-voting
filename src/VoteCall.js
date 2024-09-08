// axiosConfig.js
import axios from "axios";

const voteCall = axios.create({
  baseURL: "http://localhost:8000/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
    // Add other headers if needed
  },
  // You can add other configurations like timeout, auth, etc.
});

// Optional: Add interceptors to handle requests and responses globally
voteCall.interceptors.request.use(
  (config) => {
    // Modify config before request is sent (e.g., add auth token)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

voteCall.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default voteCall;

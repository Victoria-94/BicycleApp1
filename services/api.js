/*import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default api;
// crud establecer aqui para las peticiones con cada tabla 

import axios from "axios";*/

const API_BASE_URL = "http://localhost:8080"; // Reemplaza con la IP del backend

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

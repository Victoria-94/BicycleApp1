import { api } from "./api";
import axios from "axios";


export const UserService = {
  /**
   * Inicia sesión con email y contraseña.
   * @param {string} email - Correo electrónico del usuario.
   * @param {string} password - Contraseña del usuario.
   * @returns {Promise<object|null>} - Respuesta del backend o `null` en caso de error.
   */
  login: async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      return response.data; // Devuelve token o datos del usuario
    } catch (error) {
      console.error("Error en login:", error.response?.data || error.message);
      return null;
    }
  },

  /**
   * Registra un nuevo usuario.
   * @param {object} userData - Datos del usuario (name, email, age, weight, password).
   * @returns {Promise<object|null>} - Respuesta del backend o `null` en caso de error.
   */
  signup: async (userData) => {
    try {
      const response = await api.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      console.error("Error en registro:", error.response?.data || error.message);
      return null;
    }
  },
};

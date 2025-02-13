import { api } from "./api";

export const UserService = {
  login: async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      return response.data; // Devuelve token de autenticación
    } catch (error) {
      console.error("Error en login:", error);
      return null;
    }
  },

  signup: async (userData) => {
    try {
      const response = await api.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      console.error("Error en registro:", error);
      return null;
    }
  },
};

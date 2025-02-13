import { api } from "./api";

export const BicycleService = {
  getBicycleStatus: async () => {
    try {
      const response = await api.get("/bicycle/status");
      return response.data; // Devuelve estado del dinamo y carga
    } catch (error) {
      console.error("Error al obtener estado de la bicicleta:", error);
      return null;
    }
  },

  startPedaling: async () => {
    try {
      const response = await api.post("/bicycle/start");
      return response.data;
    } catch (error) {
      console.error("Error al iniciar pedaleo:", error);
    }
  },

  stopPedaling: async () => {
    try {
      const response = await api.post("/bicycle/stop");
      return response.data;
    } catch (error) {
      console.error("Error al detener pedaleo:", error);
    }
  },
};

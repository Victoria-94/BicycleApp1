import * as Battery from "expo-battery";

export const BatteryService = {
  getBatteryLevel: async () => {
    try {
      const level = await Battery.getBatteryLevelAsync();
      return level ? level * 100 : null;
    } catch (error) {
      console.error("Error obteniendo el nivel de batería:", error);
      return null;
    }
  },
};

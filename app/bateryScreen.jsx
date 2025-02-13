import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Battery from "expo-battery";

export default function BatteryScreen() {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    const getBatteryLevel = async () => {
      const level = await Battery.getBatteryLevelAsync();
      setBatteryLevel(level * 100); // Se multiplica por 100 para mostrar en porcentaje
    };

    getBatteryLevel();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nivel de Batería</Text>
      <Text style={styles.batteryText}>
        {batteryLevel !== null ? `${batteryLevel.toFixed(0)}%` : "Cargando..."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  title: {
    fontSize: 24,
    color: "#FF5722",
    fontWeight: "bold",
    marginBottom: 10,
  },
  batteryText: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold",
  },
});

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import * as Battery from "expo-battery";
import { Ionicons } from "@expo/vector-icons"; // Importar íconos de Expo

export default function EventsScreen() {
  const router = useRouter();
  const [stats, setStats] = useState({ time: 0, calories: 0 });
  const [batteryLevel, setBatteryLevel] = useState(null);

  // Obtener el nivel de batería al cargar la pantalla
  useEffect(() => {
    const fetchBatteryLevel = async () => {
      const level = await Battery.getBatteryLevelAsync();
      console.log("Nivel de batería:", level * 100); // Verificar en consola
      setBatteryLevel(level * 100); // Convertimos a porcentaje
    };

    fetchBatteryLevel();

    // Escuchar cambios en la batería en tiempo real
    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      console.log("Cambio en la batería:", batteryLevel * 100); // Verificar cambios
      setBatteryLevel(batteryLevel * 100);
    });

    return () => {
      subscription.remove(); // Limpiar el listener cuando el componente se desmonta
    };
  }, []);

  // Función para seleccionar el ícono de batería según el nivel
  const getBatteryIcon = () => {
    if (batteryLevel === null) return "battery-unknown";
    if (batteryLevel > 80) return "battery-full";
    if (batteryLevel > 60) return "battery-three-quarters";
    if (batteryLevel > 40) return "battery-half";
    if (batteryLevel > 20) return "battery-quarter";
    return "battery-empty";
  };

  const handleStart = () => {
    setStats({
      time: stats.time + 1,
      
      calories: stats.calories + 5,
    });
  };

  const navigateToHistory = () => {
    router.push("/history");
  };

  return (
    <View style={styles.container}>
      {/* Botón de Historial */}
      <TouchableOpacity style={styles.historyButton} onPress={navigateToHistory}>
        <Text style={styles.historyButtonText}>Historial</Text>
      </TouchableOpacity>

      {/* Mostrar nivel de batería con icono */}
      <View style={styles.batteryContainer}>
        <Ionicons name={getBatteryIcon()} size={32} color={batteryLevel > 20 ? "green" : "red"} />
        <Text style={styles.batteryText}>
          {batteryLevel !== null ? `${batteryLevel.toFixed(0)}% 🔋` : "Cargando... 🔄"}
        </Text>
      </View>
    
      <Text style={styles.statLabel}>Nivel de Carga</Text>

      {/* Estadísticas */}
      <Text style={styles.statValue}>{stats.time.toFixed(2)}</Text>
      <Text style={styles.statLabel}>Tiempo</Text>

      <Text style={styles.statValue}>{stats.distance.toFixed(2)}</Text>
      <Text style={styles.statLabel}>Distancia (km)</Text>

    

      {/* Botón de Inicio */}
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startIcon}>▶</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  historyButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#FF5722",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  historyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  batteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  batteryText: {
    fontSize: 18,
    color: "#FFF",
    marginLeft: 10,
  },
  statValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  statLabel: {
    fontSize: 18,
    color: "#aaa",
    textAlign: "center",
    marginBottom: 20,
  },
  startButton: {
    width: 100,
    height: 100,
    backgroundColor: "#FF5722",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  startIcon: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
  },
});

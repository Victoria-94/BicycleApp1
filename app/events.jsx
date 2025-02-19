import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import * as Battery from "expo-battery";


export default function EventsScreen() {
  const router = useRouter(); // Hook para manejar la navegación
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Función para navegar a la pantalla de Historial
  const navigateToHistory = () => {
    router.push("/history");
  };

  useEffect(() => {
    const fetchBatteryLevel = async () => {
      try {
        const level = await Battery.getBatteryLevelAsync();
        if (level !== null) setBatteryLevel(level * 100);
      } catch (error) {
        console.error("Error al obtener nivel de batería:", error);
      }
    };

    fetchBatteryLevel();

    const subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      setBatteryLevel(batteryLevel * 100);
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <View style={styles.container}>
      {/* Botón de Historial */}
      <TouchableOpacity style={styles.historyButton} onPress={navigateToHistory}>
        <Text style={styles.historyButtonText}>Historial</Text>
      </TouchableOpacity>

      {/* Mostrar nivel de batería */}
      <Text style={styles.text}>
        Carga del Teléfono: {batteryLevel !== null ? `${batteryLevel.toFixed(0)}%` : "Cargando..."}
      </Text>

      {/* Mostrar tiempo de uso */}
      <Text style={styles.text}>Tiempo de Uso: {Math.floor(time / 60)} min {time % 60} seg</Text>

      {/* Botón para iniciar/detener el cronómetro */}
      <TouchableOpacity
        style={[styles.button, isRunning ? styles.stopButton : styles.startButton]}
        onPress={() => setIsRunning(!isRunning)}
      >
        <Text style={styles.buttonText}>{isRunning ? "Detener" : "Iniciar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  historyButton: {
    position: "absolute",
    top: 50,
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
  text: {
    fontSize: 22,
    color: "#FFF",
    marginBottom: 20,
    marginTop: 80, // Espacio para no chocar con el botón de historial
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
  },
  startButton: {
    backgroundColor: "#4CAF50",
  },
  stopButton: {
    backgroundColor: "#FF5722",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

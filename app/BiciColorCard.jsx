import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router"; // Hook para manejar la navegación

export default function SelectBikeScreen() {
  const routers = useRouter(); // Inicializa el enrutador de Expo Router
  const [selectedBike, setSelectedBike] = useState(null);

  const handleBikeSelection = (bikeColor) => {
    setSelectedBike(bikeColor);
  };

  const handleSubmit = () => {
    console.log("Bicicleta seleccionada:", selectedBike);
    routers.push("/events"); // Navega a la pantalla de eventos
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona tu bicicleta</Text>

      <View style={styles.bikeGrid}>
        <TouchableOpacity
          style={[
            styles.bikeButton,
            selectedBike === "Verde" && styles.selectedButton,
          ]}
          onPress={() => handleBikeSelection("Verde")}
        >
          <Text style={styles.bikeText}>Verde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bikeButton,
            selectedBike === "Roja" && styles.selectedButton,
          ]}
          onPress={() => handleBikeSelection("Roja")}
        >
          <Text style={styles.bikeText}>Roja</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bikeButton,
            selectedBike === "Amarilla" && styles.selectedButton,
          ]}
          onPress={() => handleBikeSelection("Amarilla")}
        >
          <Text style={styles.bikeText}>Amarilla</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bikeButton,
            selectedBike === "Azul" && styles.selectedButton,
          ]}
          onPress={() => handleBikeSelection("Azul")}
        >
          <Text style={styles.bikeText}>Azul</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          !selectedBike && styles.disabledButton, // Estilo deshabilitado si no hay selección
        ]}
        onPress={handleSubmit}
        disabled={!selectedBike} // Deshabilita el botón si no se selecciona ninguna bicicleta
      >
        <Text style={styles.submitText}>Seleccionada </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333", // Fondo gris oscuro
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    marginBottom: 30,
  },
  bikeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  bikeButton: {
    backgroundColor: "#777", // Color gris para botones no seleccionados
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra en Android
  },
  selectedButton: {
    backgroundColor: "#FF5722", // Botón seleccionado
  },
  bikeText: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "#888", // Color gris para el botón deshabilitado
  },
  submitText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

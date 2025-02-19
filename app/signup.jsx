import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { useRouter } from "expo-router"; 
import { UserService } from "../services/userService"; // Conectar con el backend
export default function SignupScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    weight: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);

    // Validación de campos vacíos
    if (!form.name || !form.email || !form.age || !form.weight || !form.password) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const response = await UserService.signup(form); // Llamamos al backend
      if (response) {
        Alert.alert("Éxito", "Registro exitoso. Redirigiendo a eventos...");
        router.push("/events"); // Navega a la pantalla de eventos
      } else {
        Alert.alert("Error", "No se pudo registrar el usuario.");
      }
    } catch (error) {
      Alert.alert("Error", "Error en el registro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={require("../assets/images/fondo.jpg")} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Crear Cuenta</Text>

        <TextInput style={styles.input} placeholder="Nombre" placeholderTextColor="#aaa"
          value={form.name} onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput style={styles.input} placeholder="Correo Electrónico" placeholderTextColor="#aaa"
          keyboardType="email-address" value={form.email} onChangeText={(text) => setForm({ ...form, email: text })}
        />
        <TextInput style={styles.input} placeholder="Edad" placeholderTextColor="#aaa" keyboardType="numeric"
          value={form.age} onChangeText={(text) => setForm({ ...form, age: text })}
        />
        <TextInput style={styles.input} placeholder="Peso" placeholderTextColor="#aaa" keyboardType="numeric"
          value={form.weight} onChangeText={(text) => setForm({ ...form, weight: text })}
        />
        <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#aaa" secureTextEntry
          value={form.password} onChangeText={(text) => setForm({ ...form, password: text })}
        />

        <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={handleSignup} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? "Registrando..." : "Registrarse"}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20, backgroundColor: "rgba(0, 0, 0, 0.5)" },
  title: { fontSize: 28, color: "#FFF", fontWeight: "bold", marginBottom: 20 },
  input: { width: "90%", backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: 25, padding: 15, marginVertical: 10, fontSize: 16, borderWidth: 1, borderColor: "#ddd" },
  button: { backgroundColor: "#FF5722", paddingVertical: 15, paddingHorizontal: 30, borderRadius: 25, alignItems: "center", marginTop: 20, width: "90%" },
  buttonDisabled: { backgroundColor: "#888" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

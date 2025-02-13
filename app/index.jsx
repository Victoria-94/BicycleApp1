import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground, 
} from "react-native";
import { useRouter } from "expo-router"; 

export default function SignupScreen() {
  const router = useRouter(); 
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = () => {
    console.log("Datos enviados:", form);
    router.push("/BiciColorCard"); 
  };

  const navigateToSignup = () => {
    router.push("/signup"); 
  };

  return (
    <ImageBackground
      source={require("../assets/images/fondo.jpg")}
      style={styles.background}
      resizeMode="cover" 
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>BICYCLE CHANGE</Text>
        <Text style={styles.subtitle}>Carga tu movil mientras entrenas</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#aaa"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.linkText}>¿Ya tienes una cuenta? Crea una aquí</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: "#FF5722", 
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff", 
    marginBottom: 30,
  },
  input: {
    width: "90%",
    backgroundColor: "rgba(255,255,255,0.8)", 
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF5722", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff", 
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    fontSize: 14,
    color: "#FF5722", 
    textDecorationLine: "underline", 
    marginTop: 20,
  },
});

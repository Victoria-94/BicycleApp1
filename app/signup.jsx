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
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    weight: "",
    password: "",
  });

  const handleSignup = () => {
    console.log("User Data:", form);
    
    router.push("/events"); 
  };

  return (
    <ImageBackground
      source={require("../assets/images/fondo.jpg")} 
      style={styles.background}
      resizeMode="cover" 
    
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor="#aaa"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Age"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={form.age}
          onChangeText={(text) => setForm({ ...form, age: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Weight"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={form.weight}
          onChangeText={(text) => setForm({ ...form, weight: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={form.password}
          onChangeText={(text) => setForm({ ...form, password: text })}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  input: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#FF5722",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

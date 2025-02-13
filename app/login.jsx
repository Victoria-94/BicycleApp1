import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router"; 

export default function LoginScreen() {
  const router = useRouter(); 

  const navigateToSignup = () => {
    router.push("/BiciColorCard"); 
  };

  

  return (
  <ImageBackground
        source={require("../assets/images/fondo.jpg")} 
        style={styles.background}
        resizeMode="cover" 
      
      >  
    <View style={styles.container}>
      <Text style={styles.title}>BICYCLE CHANGE</Text>
      <TouchableOpacity onPress={navigateToSignup}>
        <Text style={[styles.subtitle, { textDecorationLine: "underline", color: "#FF5722" }]}>
          Crea una cuenta 
        </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080",
  },
  title: {
    fontSize: 32,
    color: "#FF5722",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
});

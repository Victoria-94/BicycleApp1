import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({ placeholder, keyboardType = "default", secureTextEntry = false, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
});

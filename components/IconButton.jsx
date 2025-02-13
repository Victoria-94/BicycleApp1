import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function IconButton({ icon, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={{ uri: icon }} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

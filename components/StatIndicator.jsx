import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HistoryCard({ date, time, distance, battery }) {
  return (
    <View style={styles.card}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.detail}>Tiempo: {time} min</Text>
      <Text style={styles.detail}>Distancia: {distance} km</Text>
      <Text style={styles.detail}>Carga: {battery}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
});

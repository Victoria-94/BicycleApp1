import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function HistoryScreen() {
  const history = [
    { date: "Lunes 16, 07:03am", time: "0:15:44"},
    { date: "Martes 17, 10:40am", time: "0:10:44"},
    { date: "Domingo 15, 09:45am", time: "0:06:44"},
  ];

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.header}>May 2025</Text>
      <View style={styles.summary}>
       
        <Text style={styles.summaryItem}>02:50:51</Text>
        <Text style={styles.summaryItem}>15 % </Text>
      </View>

      {/* Historial */}
      <ScrollView>
        {history.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.details}>
              
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", 
    padding: 20,
  },
  header: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryItem: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", 
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  date: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  details: {
    color: "#fff",
    fontSize: 14,
  },
});

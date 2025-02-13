import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="BiciColorCard" options={{ title: "BiciColorCard" }} />
      <Stack.Screen name="Index" options={{ title: "Inicio" }} />
      <Stack.Screen name="Events" options={{ title: "Eventos" }} />
      <Stack.Screen name="Signup" options={{ title: "Crear Cuenta" }} />
      <Stack.Screen name="History"options={{ title: "Historial" }} />
    </Stack>
  );
}

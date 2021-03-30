import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Getting the</Text>
      <Text style={{ ...styles.text, fontWeight: "200", color: "#555" }}>
        Fucking
      </Text>
      <Text style={styles.text}>Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#000",
  },
  text: {
    fontWeight: "bold",
    fontSize: 73,
    lineHeight: 73,
    color: "white",
  },
});

import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Card } from "react-native-elements";

import CargaJornales from "./cargaJornales.js";

class Main extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text />
        <Card>
          <Card.Title>POR FIN ESTAMOS AVANZANDO</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Este es un pequeño paso para el hombre, un gran paso para la
            humanidad
          </Text>
        </Card>

        <Text>Aca va el texto en cuestion. Se esta armando el Home</Text>
        <CargaJornales></CargaJornales>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;

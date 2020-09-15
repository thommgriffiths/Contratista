import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";

class Jornales extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text />
        <Card>
          <Card.Title>Star Wars: A New Hope</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>Volvimos a estar en carrera</Text>
        </Card>
      </View>
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

export default Jornales;

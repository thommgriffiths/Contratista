import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Picker,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";

class MenuObra extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text />
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigate("CheckList Obra")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>CheckList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigate("Pedido Materiales")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Pedido Materiales</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigate("Pedido Reembolsos")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Pedido Reembolsos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigate("Revision Tareas Obra")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Revision Tareas Obra
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigate("Requerimientos Obra")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Requerimientos Obra
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => navigate("Fotos Obra")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Fotos Obra</Text>
        </TouchableOpacity>
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
  textinput: {
    borderWidth: 2,
    borderColor: "skyblue",
    margin: 20,
  },
  picker: {
    height: 50,
    width: 250,
  },
  TouchableOpacity: {
    marginTop: 20,
    width: 290,
    height: 50,
    backgroundColor: "#ff5204",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});

export default MenuObra;

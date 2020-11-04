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

class ObraFotos extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text> Aqui seria para sacar fotos de obra</Text>
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
    width: 250,
    height: 50,
    backgroundColor: "#ff5204",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});

export default ObraFotos;

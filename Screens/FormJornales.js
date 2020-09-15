import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Picker,
  FlatList,
} from "react-native";
import { Card } from "react-native-elements";

import Obras from "../assets/Obras";

class FormJornales extends Component {
  constructor() {
    super();
    this.state = {
      LObras: Obras,
      Obra: "",
      Tarea: "",
      total: "",
      contratista: "",
      ObraSeleccionada: "",
    };
  }

  enviar() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error.message));

    this.setState({
      Obra: "",
      Tarea: "",
      total: "",
      contratista: "",
    });

    console.log(this.state.LObras[0].nombre);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text />
        <Card>
          <Card.Title>Jornales Load </Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Completa el formulario debajo
          </Text>
        </Card>
        <TextInput
          placeholder="Ingrese Obra"
          style={styles.textinput}
          onChangeText={(text) => {
            this.setState({ Obra: text });
          }}
        />
        <TextInput
          placeholder="Ingrese Tarea"
          style={styles.textinput}
          onChangeText={(text) => {
            this.setState({ Tarea: text });
          }}
        />
        <TextInput
          placeholder="Ingrese Total"
          style={styles.textinput}
          onChangeText={(text) => {
            this.setState({ total: text });
          }}
        />
        <Button
          title="Submit"
          onPress={() => {
            this.enviar();
          }}
        />
        <Picker
          selectedValue={this.state.ObraSeleccionada}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ ObraSeleccionada: itemValue })
          }
        >
          {this.state.LObras.map((i, index) => (
            <Picker.Item key={index} label={i.nombre} value={i.ID} />
          ))}
        </Picker>
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
});

export default FormJornales;

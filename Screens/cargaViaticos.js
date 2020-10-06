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

const baseUrl = "https://my-json-server.typicode.com/thommgriffiths/Server/";

class CargaViaticos extends Component {
  constructor() {
    super();
    this.state = {
      Monto: "",
      Arquitecto: "Logged Arquitecto",
      Detalle: "",
    };
  }

  enviar() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        Contratista: "Usuario Loggeado",
        Obra: this.state.SelectedObra,
        Tarea: this.state.SelectedTarea,
      }),
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
  }

  render() {
    return (
      <View style={styles.container}>
        <Text />
        <Card>
          <Card.Title> Carga de Viaticos</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Completa el formulario debajo
          </Text>
          <Text />
          <TextInput
            placeholder="Ingrese el detalle del concepto"
            style={styles.textinput}
            onChangeText={(text) => {
              this.setState({ Detalle: text });
            }}
          />
          <TextInput
            placeholder="Ingrese el monto"
            keyboardType="numeric"
            style={styles.textinput}
            onChangeText={(text) => {
              this.setState({ Monto: text });
            }}
          />
        </Card>
        <Text />

        <Button
          title="Cargar Viaticos"
          onPress={() => {
            this.enviar();
            //alert(this.state.SelectedObra);
          }}
        />
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
});

export default CargaViaticos;

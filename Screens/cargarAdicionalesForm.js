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
} from "react-native";
import { Card } from "react-native-elements";

import Obras from "../assets/Obras";
import UNIJornales from "../assets/UnidadesJornales";

const baseUrl = "https://my-json-server.typicode.com/thommgriffiths/Server/";

class FormAdicionales extends Component {
  constructor() {
    super();
    this.state = {
      Obras: [],
      Tareas: [],
      SelectedObra: "",
      SelectedTarea: "",
      Total: "",
      contratista: "LoggedUser",
      Detalle: "",
    };
  }

  componentDidMount() {
    this.fetchObras();
    this.fetchTareas();
  }

  enviar() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        Contratista: this.state.contratista,
        Obra: this.state.SelectedObra,
        Tarea: this.state.SelectedTarea,
        Detalle: this.state.Detalle,
        Total: this.state.Total,
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

  fetchObras() {
    //console.log("se hizo un llamado a " + (baseUrl + type));
    return fetch(baseUrl + "obras")
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
      .then((json) => {
        this.setState({ Obras: json });
      })
      .catch((error) => console.log(error.message));
  }

  fetchTareas() {
    //console.log("se hizo un llamado a " + (baseUrl + type));
    return fetch(baseUrl + "tareas")
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
      .then((json) => {
        this.setState({ Tareas: json });
      })
      .catch((error) => console.log(error.message));
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text />
          <Text />
          <Card>
            <Card.Title> Carga de gastos Adicionales </Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              Completa el formulario debajo
            </Text>
            <Text />
            <Text> Seleccione Obra</Text>
            <Picker
              selectedValue={this.state.SelectedObra}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ SelectedObra: itemValue })
              }
            >
              {this.state.Obras.map((i, index) => (
                <Picker.Item key={index} label={i.nombre} value={i.id} />
              ))}
            </Picker>
            <Text />
            <Text> Seleccione Tarea</Text>
            <Picker
              selectedValue={this.state.SelectedTarea}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ SelectedTarea: itemValue })
              }
            >
              {this.state.Tareas.map((i, index) => (
                <Picker.Item key={index} label={i.nombre} value={i.id} />
              ))}
            </Picker>
            <Text />
            <Text> Ingrese el detalle de la solicitud</Text>
            <TextInput
              placeholder="Detalle"
              multiline
              numberOfLines={4}
              style={styles.textinput}
              onChangeText={(text) => {
                this.setState({ Detalle: text });
              }}
            />
            <Text />
            <Text> Ingrese el monto del reembolso</Text>
            <TextInput
              placeholder="Monto"
              keyboardType="numeric"
              style={styles.textinput}
              onChangeText={(text) => {
                this.setState({ Total: text });
              }}
            />
          </Card>
          <Text />

          <Button
            title="Enviar Adicionales"
            onPress={() => {
              this.enviar();
              //alert(this.state.SelectedObra);
            }}
          />
          <Text></Text>
        </View>
      </ScrollView>
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

export default FormAdicionales;

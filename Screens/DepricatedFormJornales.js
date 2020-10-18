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
import UNIJornales from "../assets/UnidadesJornales";

const baseUrl = "https://my-json-server.typicode.com/thommgriffiths/Server/";

class FormJornales extends Component {
  constructor() {
    super();
    this.state = {
      Obras: [],
      Tareas: [],
      SelectedObra: "",
      SelectedTarea: "",
      SelectedJornales: "",
      contratista: "",
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
      <View style={styles.container}>
        <Text />
        <Card>
          <Card.Title> Carga de Jornales </Card.Title>
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
          <Text> Seleccione Cantidad</Text>
          <Picker
            selectedValue={this.state.SelectedJornales}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ SelectedJornales: itemValue })
            }
          >
            {UNIJornales.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.valor} />
            ))}
          </Picker>
        </Card>
        <Text />

        <Button
          title="Cargar Jornales"
          onPress={() => {
            this.enviar();
            //alert(this.state.SelectedObra);
          }}
        />
      </View>
    );
  }
}

/*          
<TextInput
    placeholder="Numero de jornales"
    keyboardType="numeric"
    style={styles.textinput}
    onChangeText={(text) => {
        this.setState({ SelectedObra: text });
    }}
/>
*/

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

export default FormJornales;

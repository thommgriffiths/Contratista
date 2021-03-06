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
const ContratistaID = "IdDelContratistaLoggeado";

class consultaJornalesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Obras: [],
      Tareas: [],
      SelectedObra: "",
      SelectedTarea: "",
    };
  }

  componentDidMount() {
    this.fetchObras();
    this.fetchTareas();
  }

  enviar() {
    let QueryObject = {
      Obra: this.state.SelectedObra,
      Tarea: this.state.SelectedTarea,
      Contratista: ContratistaID,
    };

    const { navigate } = this.props.navigation;

    navigate("Consulta Jornales", { Query: QueryObject });
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
          <Card.Title> Busqueda de Jornales </Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Completa el formulario debajo
          </Text>
          <Text />
          <Text style={{ width: 250 }}> Seleccione Obra</Text>
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
        </Card>
        <Text />

        <Button
          title="Buscar"
          onPress={() => {
            this.enviar();
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

export default consultaJornalesForm;

import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { CheckBox, Card } from "react-native-elements";

import { ScrollView, FlatList } from "react-native-gesture-handler";

const baseUrl = "https://my-json-server.typicode.com/thommgriffiths/Server/";

class validarjornales extends Component {
  constructor() {
    super();
    this.state = {
      Jornales: [],
    };
  }

  componentDidMount() {
    this.fetchJornales();
  }

  fetchJornales() {
    console.log("se hizo un llamado a " + baseUrl + "jornales");
    return fetch(baseUrl + "jornales")
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
        this.setState({ Jornales: json });
      })
      .catch((error) => console.log(error.message));
  }

  updateList(final) {
    this.setState({ Checklist: final });
  }

  validar({ item, index }) {
    var ele = this.state.Checklist;

    ele[index].validado = !item.validado;

    this.updateList(ele);
  }

  renderItem = ({ item }) => (
    <Card>
      <Card.Title>{item.total}</Card.Title>
      <Card.Divider />
      <Text>{item.Obra}</Text>
      <Text></Text>
      <Text>{item.Tarea}</Text>
      <CheckBox
        title="Validado"
        checked={item.validado}
        onPress={() => this.validar({ item, index })}
      />
    </Card>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text />
        <Text />
        <Text style={{ fontSize: 20 }}>Jornales Cargados</Text>
        <ScrollView>
          <Text />
          <FlatList
            data={this.state.Jornales}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
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

export default validarjornales;

import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { CheckBox, Card } from "react-native-elements";

import { ScrollView, FlatList } from "react-native-gesture-handler";

const baseUrl = "https://my-json-server.typicode.com/thommgriffiths/Server/";

class cargarJornales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Jornales: [],
    };
  }

  componentDidMount() {
    this.fetchJornales();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.fetchJornales();
      alert("component re-mounted");
    }
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

  renderItem = ({ item }) => (
    <Card>
      <Card.Title>{item.total}</Card.Title>
      <Card.Divider />
      <Text style={{ width: 250 }}>{item.Obra}</Text>
      <Text>{item.Tarea}</Text>
    </Card>
  );

  render() {
    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <Text />
        <Text />

        <CheckBox
          center
          title="Nuevo Jornal"
          iconRight
          iconType="material"
          uncheckedIcon="add"
          onPress={() => navigate("CargarJForm")}
        />

        <Text />

        <Text style={{ fontSize: 20 }}>Jornales Cargados Hoy </Text>
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

export default cargarJornales;

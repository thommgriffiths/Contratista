import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { CheckBox, Card } from "react-native-elements";

import { ScrollView, FlatList } from "react-native-gesture-handler";

const baseUrl = "https://my-json-server.typicode.com/thommgriffiths/Server/";

class cargarAdicionales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Adicionales: [],
    };
  }

  componentDidMount() {
    this.fetchAdicionales();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.fetchAdicionales();
      alert("component re-mounted");
    }
  }

  fetchAdicionales() {
    console.log("se hizo un llamado a " + baseUrl + "adicionales");
    return fetch(baseUrl + "adicionales")
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
        this.setState({ Adicionales: json });
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

        <Text style={{ fontSize: 20 }}>Adicionales Cargados Hoy </Text>
        <ScrollView>
          <Text />
          <FlatList
            data={this.state.Adicionales}
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

export default cargarAdicionales;

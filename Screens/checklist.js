import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import { Card, CheckBox, Button, Overlay, Icon } from "react-native-elements";

import { ScrollView, FlatList } from "react-native-gesture-handler";

const baseUrl = "https://my-json-server.typicode.com/thommgriffiths/Server/";

//Buscar toda la data en https://reactnativeelements.com/docs/bottomsheet

class Checklist extends Component {
  constructor() {
    super();
    this.state = {
      Checklist: [],
      visible: false,
      newitemtitulo: "",
      newitemcuerpo: "",
    };
  }

  componentDidMount() {
    this.fetchChecklist();
  }

  toggleOverlay() {
    let current = this.state.visible;
    this.setState({ visible: !current });
  }

  fetchChecklist() {
    console.log("se hizo un llamado a " + baseUrl + "checklist");
    return fetch(baseUrl + "checklist")
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
        this.setState({ Checklist: json });
      })
      .catch((error) => console.log(error.message));
  }

  updateList(final) {
    this.setState({ Checklist: final });
  }

  checkthebox({ item, index }) {
    var ele = this.state.Checklist;

    ele[index].ticked = !item.ticked;

    this.updateList(ele);
  }

  deleteitem({ item, index }) {
    var ele = this.state.Checklist;
    delete ele[index];

    var filtered = ele.filter(function (el) {
      return el != null;
    });

    this.updateList(filtered);
  }

  itemAdded() {
    var newelement = {
      titulo: this.state.newitemtitulo,
      cuerpo: this.state.newitemcuerpo,
      ticked: false,
    };

    var ele = this.state.Checklist;

    ele.push(newelement);

    this.setState({ visible: false, Checklist: ele });
  }

  renderItem = ({ item, index }) => (
    <Card>
      <Card.Title>{item.titulo}</Card.Title>
      <Card.Divider />
      <Text>{item.cuerpo}</Text>
      <CheckBox
        title="Terminado"
        checked={item.ticked}
        onPress={() => this.checkthebox({ item, index })}
      />
      <CheckBox
        title="Eliminar"
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="clear"
        uncheckedColor="red"
        onPress={() => this.deleteitem({ item, index })}
      />
    </Card>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text />
        <Text />
        <View>
          <CheckBox
            center
            title="CheckList"
            iconRight
            iconType="material"
            uncheckedIcon="add"
            onPress={() => this.toggleOverlay()}
          />
        </View>
        <Overlay
          isVisible={this.state.visible}
          onBackdropPress={() => this.toggleOverlay()}
        >
          <View>
            <Card>
              <Card.Title>Nuevo Item</Card.Title>
              <Card.Divider />
              <TextInput
                placeholder="Titulo de la tarea"
                style={styles.textinput}
                onChangeText={(text) => {
                  this.setState({ newitemtitulo: text });
                }}
              />
              <Text />
              <TextInput
                placeholder="Detalle"
                style={styles.textinput}
                onChangeText={(text) => {
                  this.setState({ newitemcuerpo: text });
                }}
              />
            </Card>
            <Text />

            <Button
              title="Agregar"
              onPress={() => {
                this.itemAdded();
              }}
            />
          </View>
        </Overlay>
        <ScrollView>
          <Text />
          <FlatList
            data={this.state.Checklist}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.titulo}
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

/*          
<View
style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
/>
<View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
<View
style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
/>*/

export default Checklist;

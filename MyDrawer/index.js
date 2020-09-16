// In App.js in a new project

import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Jornales from "../Screens/cargaJornales";
import FormJornales from "../Screens/FormJornales";
import FormAdicionales from "../Screens/cargaAdicionales";
import ListaJornales from "../Screens/listadoJornales";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Pantalla de inicio</Text>
      <Text />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Carga Jornales")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Carga Jornales</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Carga Jornales")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Carga Adicionales</Text>
      </TouchableOpacity>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Otra futura pantalla</Text>
    </View>
  );
}

//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Carga Jornales" component={FormJornales} />
        <Drawer.Screen name="Carga Adicionales" component={FormAdicionales} />

        <Drawer.Screen name="Jornales Cargados" component={ListaJornales} />
        <Drawer.Screen name="Otra Pantalla" component={PerfilScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

export default MyDrawer;

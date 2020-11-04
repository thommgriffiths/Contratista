// In App.js in a new project

import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import consultaJornales from "../Screens/consultaJornales";
import consultaJornalesForm from "../Screens/consultaJornalesForm";
import cargarJornales from "../Screens/cargarJornales";
import cargarJornalesForm from "../Screens/cargarJornalesForm";
import cargarAdicionales from "../Screens/cargarAdicionales";
import cargarAdicionalesForm from "../Screens/cargarAdicionalesForm";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Pantalla de inicio</Text>
      <Text />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Cargar Jornales")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Cargar Jornales</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Consulta Jornales")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Consulta Historica</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Carga Adicionales")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Carga Adicionales</Text>
      </TouchableOpacity>
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

        <Drawer.Screen name="Consulta Jornales" component={consultaJornales} />
        <Drawer.Screen name="ConsultaJForm" component={consultaJornalesForm} />
        <Drawer.Screen name="Cargar Jornales" component={cargarJornales} />
        <Drawer.Screen name="CargarJForm" component={cargarJornalesForm} />
        <Drawer.Screen name="Carga Adicionales" component={cargarAdicionales} />
        <Drawer.Screen name="CargarAForm" component={cargarAdicionalesForm} />
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

// In App.js in a new project

import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MenuObra from "../Screens/OperacionesObra";
import ObraChecklist from "../Screens/ObraChecklist";
import ObraMateriales from "../Screens/ObraMateriales";
import ObraReembolsos from "../Screens/ObraReembolsos";
import ObraRequerimientos from "../Screens/ObraRequerimientos";
import ObraTareas from "../Screens/ObraTareas";
import ObraFotos from "../Screens/ObraFotos";

import CargaViaticos from "../Screens/cargaViaticos";
import FormAdicionales from "../Screens/cargarReembolsos";
import Checklist from "../Screens/checklist";
import validarjornales from "../Screens/validarjornales";
function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Pantalla de inicio</Text>
      <Text />

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Menu Obra")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Menu Obra</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Carga viaticos")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Carga viaticos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => props.navigation.navigate("Validar Jornales")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Validar Jornales</Text>
      </TouchableOpacity>
    </View>
  );
}

function OtraScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Otra Pantalla</Text>
    </View>
  );
}

const Stack = createStackNavigator();

//const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu Obra" component={MenuObra} />
        <Stack.Screen name="Carga viaticos" component={CargaViaticos} />
        <Stack.Screen name="Validar Jornales" component={validarjornales} />

        <Stack.Screen name="CheckList Obra" component={ObraChecklist} />
        <Stack.Screen name="Pedido Materiales" component={ObraMateriales} />
        <Stack.Screen name="Pedido Reembolsos" component={ObraReembolsos} />
        <Stack.Screen name="Revision Tareas Obra" component={ObraTareas} />
        <Stack.Screen
          name="Requerimientos Obra"
          component={ObraRequerimientos}
        />
        <Stack.Screen name="Fotos Obra" component={ObraFotos} />

        <Stack.Screen name="CheckList" component={Checklist} />
        <Stack.Screen name="Reembolsos" component={FormAdicionales} />
        <Stack.Screen name="Otra" component={OtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;

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

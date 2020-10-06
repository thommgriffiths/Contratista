// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CargaViaticos from "../Screens/cargaViaticos";
import FormAdicionales from "../Screens/cargarReembolsos";
import Checklist from "../Screens/checklist";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Inicio Arquitecto</Text>
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

//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Carga viaticos" component={CargaViaticos} />
        <Drawer.Screen name="Reembolsos" component={FormAdicionales} />
        <Drawer.Screen name="Otra" component={OtraScreen} />
        <Drawer.Screen name="CheckList" component={Checklist} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;

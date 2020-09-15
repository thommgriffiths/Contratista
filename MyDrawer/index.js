// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Jornales from "../Screens/cargaJornales";
import FormJornales from "../Screens/FormJornales";

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Home Screen</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: 200,
          height: 50,
          backgroundColor: "#ff5204",
          padding: 10,
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => props.navigation.navigate("Perfil")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Ir a perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>Perfil Screen</Text>
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
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="Jornales" component={Jornales} />
        <Drawer.Screen name="Formulario" component={FormJornales} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;

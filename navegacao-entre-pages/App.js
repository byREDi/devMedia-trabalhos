import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from "./Componentes/TelaInicial/";
import TelaPerfil from "./Componentes/TelaPerfil/";

const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Tela Inicial" component = { TelaInicial } />
        <Drawer.Screen name="Tela Perfil" component = { TelaPerfil } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};
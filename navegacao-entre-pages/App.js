import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from "./Componentes/TelaHome";
import TelaDescricao from "./Componentes/TelaDescricao";
import TelaCarro from "./Componentes/TelaCarro";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Home" component = { TelaHome } />
        <Stack.Screen name="Tela Descricao" component = { TelaDescricao } />
        <Stack.Screen name="Tela Carro" component = { TelaCarro } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
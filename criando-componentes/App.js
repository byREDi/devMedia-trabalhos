import React from 'react';
import { View, StyleSheet } from 'react-native';

import Topo from './componentes/Topo/index';
import Conteudo from './componentes/Conteudo/index';


export default function App() {
  return (
    <View style={ estilos.containerTopo }>
      <Topo />
      <Conteudo />
    </View>
  );
}

const estilos = StyleSheet.create({
  containerTopo: {
    flex: 1,
  }
});
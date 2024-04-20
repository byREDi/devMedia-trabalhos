import React from 'react';
import { View } from 'react-native';

import BarraTitulo from './componentes/BarraTitulo';
import Card from './componentes/Card';
import Conteudo from './componentes/Conteudo';

import styles from './styles';

export default function App() {
  return (
    <View style={ styles.container }>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
  );
}
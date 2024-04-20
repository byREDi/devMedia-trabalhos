import React from 'react';
import { View, Text, Image } from 'react-native';

import Filme from '../../assets/Filme.png';
import styles from './styles';

export default function Conteudo() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.titulo }>Sobre o Ator</Text>

      <Text style={ styles.subtitulo }>Sua vida</Text>
      <Text style={ styles.paragrafo }>Nascido em Washington, DC, 21 de dezembro de 1948</Text>
      <Text style={ styles.paragrafo }>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>

      <Text style={ styles.subtitulo }>Início da carreira</Text>
      <Text style={ styles.paragrafo }>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>
      <Image source={ Filme } style={ styles.img }/>
    </View>
  )
}
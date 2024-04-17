import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import BackgroundImg from './assets/background.jpg';
import UserImg from './assets/user.jpg';

export default function App() {
  return (
    <View style={ styles.container }>
        <Image style={ styles.fotoTopo } source={ BackgroundImg } />

      <View style={ styles.boxDescricao }>
        <Image style={ styles.userImg } source={ UserImg } />
        <Text style={ styles.nameUser }>Augusto Henrique</Text>
        <Text style={ styles.textUser }>Estudando apaixonado por tecnologia, terminou o curso técnico de ADS no fim de 2020 e está estudando diáriamente para conseguir sua primeira vaga como dev mobile.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  fotoTopo: {
    flex: 1,
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center',
  },

  userImg: {
    marginTop: 20,
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  nameUser: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  textUser: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 15,
    padding: 10,
  },
});

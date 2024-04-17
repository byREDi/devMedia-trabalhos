import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import BackgroundImg from './assets/background.jpg';
import UserImg from './assets/user.jpg';

export default function App() {
  return (
      <View style={ styles.backgroundCard }>
        <Image style={ styles.imgFundo } source={ BackgroundImg } />

        <View style={ styles.cardUser }>
          <Image style={ styles.userImg } source={ UserImg } />
          <Text style={ styles.nameUser }>Augusto Henrique</Text>
          <Text style={ styles.textUser }>Estudando apaixonado por tecnologia, terminou o curso técnico de ADS no fim de 2020 e está estudando diáriamente para conseguir sua primeira vaga como dev mobile.</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  cardUser: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  nameUser: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
  },

  textUser: {
    textAlign: 'center',
    marginTop: 10,
  },

  imgFundo: {
    width: 400,
    height: 350,
  },

  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});

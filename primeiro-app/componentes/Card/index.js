import React from "react";
import { View, Image, Text } from "react-native";

import Foto from '../../assets/Foto.png';
import styles from './styles';

export default function Card() {
    return (
        <View style={ styles.container }>
            <View style={ styles.box }>
                <Image source={ Foto } style={ styles.fotoCapa }/>
                <Text style={ styles.nome }>Samuel Jackson</Text>
                <Text style={ styles.paragrafo }>Ator e produtor norte-americano</Text>
            </View>
        </View>
    )
}

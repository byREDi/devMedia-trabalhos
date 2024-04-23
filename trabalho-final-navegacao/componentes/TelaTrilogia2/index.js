import React from "react";
import { Text, Image, View } from "react-native";

import Img from '../../assets/luke-skywalker.jpg';
import styles from "./styles";

export default function TelaTrilogia1() {
    return (
        <View style={ styles.container }>
        <Text style={ styles.titulo }>A história do Luke Skywalker</Text>

        <Image source={ Img} style={ styles.img }/>

        <Text style={ styles.descricao }>Trilogia original. Episódios IV, V e VI</Text>

        <Text style={ styles.descricao }>Essa foi a primeira trilogia a surgir porém sua história se passa após a trilogia prequela.</Text>

        <Text style={ styles.descricao }>Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Leia e se batalha com o grande Darth Vader.</Text>
        </View>
    )
}
import React from "react";
import { Text, Image, View } from "react-native";

import Img from '../../assets/sith.jpg';
import styles from "./styles";

export default function TelaTrilogia1() {
    return (
        <View style={ styles.container }>
        <Text style={ styles.titulo }>A história de Rey</Text>

        <Image source={ Img} style={ styles.img }/>

        <Text style={ styles.descricao }>Trilogia sequela. Episódios VII, VIII e IX</Text>

        <Text style={ styles.descricao }>Enquanto surge uma nova ameaça para a galáxia. Rey, uma catadora de sucata e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia.</Text>
        </View>
    )
}
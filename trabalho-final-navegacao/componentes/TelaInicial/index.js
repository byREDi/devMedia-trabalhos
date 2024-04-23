import React from "react";
import { View, Button, Text, Image } from 'react-native';

import Logo from '../../assets/logo.jpg';
import styles from './styles';

export default function TelaInicial(props) {
    return (
        <View style={ styles.container }>
            <Text>Star Wars ordem cronológica</Text>
            <Image source={ Logo }/>

            <Text style={ styles.titulo }>Você sabe qual é a ordem cronológica da franquia Star Wars?</Text>

            <Text style={ styles.subtitulo }>Os principais filmes da franquia estão divididos em trilogias. Clique no botão para vê-las</Text>

            <View style={ styles.buttons}>
                <Button title="Ver 1ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 1") } color="#372D00" />
            </View>

            <View style={ styles.buttons}>
                <Button title="Ver 2ª Trilogia" onPress={ () => props.navigation.navigate("Trilogia 2") } color="#372D00" />
            </View>
            
            <View style={ styles.buttons}>
                <Button title="Ver 3ª Trilogia" onPress={ () => props.navigation.navigate("Trilogia 3") } color="#372D00" />
            </View>
        </View>
    )
}
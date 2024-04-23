import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import Carro from '../assets/hb20.jpeg';

export default function TelaDescricao(props) {
    return (
        <View style={ styles.container}>
            <Text style={ styles.titulo}>Tudo sobre HB20</Text>
            <View>
                <Image source={ Carro } style={ styles.img }/>
            </View>
            <Text style={ styles.subtitulo }>Aenean pulvinar malesuada pulvinar. Donec maximus, arcu vel ultrices venenatis, quam mi pharetra ante, quis lacinia lacus tellus placerat ex. Morbi sapien lacus, semper eu nulla sit amet, fermentum fermentum purus. Vivamus in enim et mi ultrices bibendum. Donec commodo, quam sit amet iaculis gravida, magna odio luctus ipsum, a maximus dolor risus ac tortor.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    titulo: {
        color: '#FFF',
        fontSize: 26,
        marginBottom: 20,
    },  
    subtitulo: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    img: {
        width: 300,
        height: 200,
        marginVertical: 20,
        borderRadius: 50,
    }
})
import React from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import Carro from '../assets/hb20.jpeg';

export default function TelaHome(props) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.titulo }>Stack Navigation</Text>
            <Text style={ styles.subtitulo}>Toque no botão abaixo para navegar para a rota perfil.</Text>
            <View>
                <Button 
                title="Abrir tela descrição" 
                onPress={()=>{ props.navigation.navigate('Tela Descricao') } } 
                />
            </View>
            <View onTouchEnd={()=> {props.navigation.navigate('Tela Carro') } }>
                <Image source={ Carro } style={ styles.img }/>
            </View>
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
        marginTop: 30,
        borderRadius: 50,
    }
})
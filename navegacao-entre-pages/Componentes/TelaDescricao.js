import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaDescricao(props) {
    return (
        <View style={ styles.container}>
            <Text style={ styles.titulo}>Voltando para a Home.</Text>
            <Text style={ styles.subtitulo }>Toque na seta do lado do tituloda rota ou no botão para voltar para a Home.</Text>
            <View>
                <Button
                    title="Tela inicial"
                    onPress={ ()=> { props.navigation.navigate('Tela Home') } }
                />
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
})
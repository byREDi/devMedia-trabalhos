import React from "react";
import { View, Text, Button } from 'react-native';

export default function TelaInicial(props) {
    return (
        <View>
            <Text>Tela Inicial</Text>
            <Button title="Clique aqui" onPress={()=>{ console.log("voce clicou") } }/>
            <Text>Teste</Text>
            <Button 
            title="Abrir menu lateral" 
            onPress={()=>{ props.navigation.openDrawer() } } 
            />
        </View>
    )
}
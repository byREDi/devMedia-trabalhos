import React from 'react'; 
import { View, Text } from 'react-native';

import styles from './styles';

export default function BarraTitulo(){
    return(
        <View style={ styles.container }>
            <Text style={ styles.titulo }>Ator famoso</Text>
        </View>
    )
}
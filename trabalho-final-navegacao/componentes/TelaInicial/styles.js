import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    titulo: {
        color: 'yellow',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 50,
    },
    subtitulo: {
        color: 'yellow',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    buttons:{
        width: 300,
        borderColor: 'yellow',
        borderWidth: 0.5,
        borderRadius: 5,
        marginVertical: 20,
    }
})

export default styles;
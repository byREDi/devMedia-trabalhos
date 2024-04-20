import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#0A1C35',
        paddingVertical: 20,
    },
    box: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 300,
    },
    fotoCapa: {
        width: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    nome: {
        marginTop: 10,
        fontSize: 22,
    },
    paragrafo: {
        margin: 10,
    }
});

export default styles;
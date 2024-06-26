import { StyleSheet } from "react-native"

const estilosConteudo = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    descricao: {
        textAlign: 'center',
        marginBottom: 30,
    },
    img: {
        width: 300,
        height: 150,
        marginBottom: 10,
    }
});

export default estilosConteudo;
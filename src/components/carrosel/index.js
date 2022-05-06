import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native'

export default function JogosCarrosel({ titulo, imagem, data }) {
    return(
        <TouchableOpacity style={estilo.containerCarrosel}>
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
            <Text style={estilo.data}>{data}</Text>

            </View>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    containerCarrosel: {
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 250,

    },
    titulo: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    data: {
        color: 'green',
        fontSize: 12,
        marginLeft: 29,
        marginTop: 2,
        fontWeight: 'bold',
        justifyContent: ''
    },
    images: {
        width: "100%",
        height: '100%',
        borderRadius: 10
    }
})
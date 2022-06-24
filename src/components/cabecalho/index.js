import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cabecalho() {
  return (
      <View style={styles.headers}>
          <Ionicons name='menu' size={24} color='white' />
          <Text style={styles.Texto}> Móveis Express </Text>

          <Ionicons name='ios-search-sharp' size={24} color='white' />
      </View>
  );
}

const styles = StyleSheet.create({
    headers: {
        backgroundColor: '#002333',
        borderRadius: 2,
        marginTop: 8,
        width: '99.9%',
        padding: 20,
        margin: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    Texto: {
        color: 'white',
        marginLeft: -120,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

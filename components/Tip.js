import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
// import { Feather } from '@expo/vector-icons';

initialState = {
    valueAmount: 0,
    porcentToPay: 0,
    amountToPay: 0,
    avalService: 0,
    result: 0,
}

export default class Tip extends Component {

    state = {
        ...initialState,
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                    <Text style={styles.text}>Mário</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('screen').width / 1.1),
        backgroundColor: '#DDD',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        padding: 20,
        borderRadius: 20,
    },
    text: {
        color: '#000',
    },
    icon: {
        marginTop: 20,
        color: '#FFF',
    },
})

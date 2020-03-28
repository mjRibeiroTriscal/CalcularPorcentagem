import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Top from '../components/Top'
import AdsBanner from '../components/AdsBanner'
import BackButton from '../components/BackButton'
import Profit from '../components/Profit'

// const nav = this.navigation

export default function ProfitScreen({ navigation }) {

    // const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <BackButton nav={navigation} screen='MenuScreen' />
            <Top title='Lucro' size={80} iconName='percent' />
            <Profit />
            <AdsBanner />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    boxContainer: {
        width: Dimensions.get('screen').width / 1.1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        shadowColor: '#800080',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#FFFFFFEE',
    },
})

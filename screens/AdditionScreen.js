import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Top from '../components/Top'
import AdsBanner from '../components/AdsBanner'
import BackButton from '../components/BackButton'
import Addition from '../components/Addition'

export default function AdditionScreen({ navigation }) {

    // const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <BackButton nav={navigation} screen='MenuScreen' />
            <Top title='Acrescimo' size={80} iconName='percent' />
            <Addition />
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
})

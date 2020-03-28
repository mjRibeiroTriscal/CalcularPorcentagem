import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function BackButton(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.nav.navigate(props.screen)}>
                <Ionicons style={styles.backIcon} name='ios-arrow-back' size={32} />
            </TouchableOpacity >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
        zIndex: 999,
    },
    backIcon: {
        color: '#FFFFFFAA',
        paddingVertical: 7,
        paddingHorizontal: 12,
    },
})

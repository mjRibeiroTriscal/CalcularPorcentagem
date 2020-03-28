import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default class Rate extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.buttonAval}
                    onPress={this.props.bad}>
                    <Entypo style={[styles.icon, {color: this.props.badSelected}]} name='emoji-sad' size={this.props.size} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonAval}
                    onPress={this.props.normal}>
                    <Entypo style={[styles.icon, {color: this.props.normalSelected}]} name='emoji-neutral' size={this.props.size} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonAval}
                    onPress={this.testeFun, this.props.good}>
                    <Entypo style={[styles.icon, {color: this.props.goodSelected}]} name='emoji-happy' size={this.props.size} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonAval}
                    onPress={this.props.great}>
                    <Entypo style={[styles.icon, {color: this.props.greatSelected}]} name='emoji-flirt' size={this.props.size} />
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonAval: {
        // width: '20%',
        backgroundColor: 'transparent'
    },
    icon: {
        color: '#BBBBBB'
    },
})

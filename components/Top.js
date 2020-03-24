import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as Font from 'expo-font'

export default class Top extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: false
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'AmaticSC-Bold': require('../assets/fonts/AmaticSC-Bold.ttf'),
        })

        this.setState({ fontLoaded: true })
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded ?
                    <Text style={[styles.text, {fontSize: this.props.size}]}>{this.props.title}</Text> :
                    <ActivityIndicator size='large' color='purple' />
                }
                <Feather style={styles.icon} name={this.props.iconName} size={70} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },
    text: {
        color: '#FFF',
        fontFamily: 'AmaticSC-Bold',
    },
    icon: {
        marginTop: 20,
        color: '#FFF',
    },
})

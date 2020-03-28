import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    ActivityIndicator
} from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { acrescimo } from '../assets/imagesBase/MenuIcons'

export default class MenuButton extends React.Component {

    state = {
        fontLoaded: false,
    }
    
    async componentDidMount() {
        await Font.loadAsync({
            'AmaticSC-Bold': require('../assets/fonts/AmaticSC-Bold.ttf'),
            // 'CarterOne-Regular': require('../assets/fonts/CarterOne-Regular.ttf'),
        })
        this.setState({ fontLoaded: true })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.nav.navigate(this.props.screen)}>
                    <Image
                        style={styles.leftIcon}
                        source={{ uri: acrescimo, }}
                    />
                    {
                        this.state.fontLoaded ?
                            <Text style={[styles.label, {color: this.props.color}]}>{this.props.label}</Text> :
                            <ActivityIndicator size='small' color='purple' />
                    }
                    <Ionicons style={styles.rightIcon} name='ios-arrow-forward' size={30} />
                </TouchableOpacity >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        borderBottomWidth: 2,
        borderBottomColor: '#80008088',
    },
    button: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
    },
    leftIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 30,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        opacity: 0.3,
    },
    label: {
        fontSize: 28,
        fontFamily: 'AmaticSC-Bold',
        marginRight: '10%',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    rightIcon: {
        color: '#FFF',
        fontWeight: 'bold',
        backgroundColor: '#80008044',
        paddingHorizontal: 7,
        borderRadius: 20,
        position: 'absolute',
        right: 30,
    },
})

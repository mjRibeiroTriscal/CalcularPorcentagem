import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Top from '../components/Top'
import Tip from '../components/Tip'
import AdsBanner from '../components/AdsBanner'

export default class TipScreen extends Component {

	render() {
		return (
			<View style={styles.container}>
                <Top title='Gorjeta' size={80} iconName='percent' />
                <Tip />
				<AdsBanner />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1,
        width: Dimensions.get('screen').width,
		backgroundColor: '#fff',
        alignItems: 'center',
	},
})

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import TestScreen from './screens/TestScreen'

import {decode, encode} from 'base-64'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

export default class App extends Component {

	render() {
		return (
			<View style={styles.container}>
				<TestScreen nome='Mário' />
				{/* <AdsBanner /> */}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 24,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
})

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import TipScreen from './screens/TipScreen'

import {decode, encode} from 'base-64'
!global.btoa ? global.btoa = encode : 0
!global.atob ? global.atob = decode : 0

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TipScreen nome='Mário' />
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

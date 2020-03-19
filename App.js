import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import ImcScreen from './screens/ImcScreen'
import AdsBanner from './components/AdsBanner'

export default class App extends Component {

	render() {
		return (
			<View style={styles.container}>
				<ImcScreen />
				<AdsBanner />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginTop: 24,
	},
})

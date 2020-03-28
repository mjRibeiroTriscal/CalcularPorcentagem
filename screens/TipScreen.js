import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Top from '../components/Top'
import Tip from '../components/Tip'
import AdsBanner from '../components/AdsBanner'
import BackButton from '../components/BackButton'

export default function TipScreen({ navigation }) {

	// const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<BackButton nav={navigation} screen='MenuScreen' />
			<Top title='Gorjeta' size={80} iconName='percent' />
			<Tip />
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

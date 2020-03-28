import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import MenuButton from '../components/MenuButton'
import { logo, bgMenu01, bgMenu02 } from '../assets/imagesBase/MenuIcons'

export default function MenuScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.bgMenu01}
				source={{ uri: bgMenu01, }}
			/>
			<Image
				style={styles.bgMenu02}
				source={{ uri: bgMenu02, }}
			/>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={{ uri: logo, }}
				/>
			</View>
			<View style={styles.buttonsContainer}>
				<MenuButton color='purple' nav={navigation} screen='AdditionScreen' label='Acrescimo' />
				<MenuButton color='purple' nav={navigation} screen='TipScreen' label='Gorjeta' />
				<MenuButton color='purple' nav={navigation} screen='DiscountScreen' label='Desconto' />
				<MenuButton color='purple' nav={navigation} screen='ProfitScreen' label='Lucro' />
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}>Developed by TargetCode</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	logoContainer: {
		flex: 4,
		width: Dimensions.get('screen').width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		marginTop: 40,
		borderWidth: 1,
		borderRadius: 120,
		width: 135,
		height: 135,
		backgroundColor: '#fff',
	},
	buttonsContainer: {
		flex: 8,
		paddingVertical: 50,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	footer: {
		flex: 1,
		width: Dimensions.get('screen').width,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	footerText: {
		color: 'purple',
		opacity: 0.4,
		fontWeight: '700',
	},
	bgMenu01: {
		width: Dimensions.get('screen').width / 3,
		height: Dimensions.get('screen').height,
		position: 'absolute',
		right: 0,
		zIndex: -999,
		opacity: 0.8,
	},
	bgMenu02: {
		width: Dimensions.get('screen').width / 1.8,
		height: Dimensions.get('screen').width / 1.8,
		position: 'absolute',
		left: 0,
		top: 0,
		zIndex: -999,
		opacity: 0.8,
	},
})

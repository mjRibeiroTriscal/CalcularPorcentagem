import * as React from 'react';
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MenuScreen from './screens/MenuScreen'
import TipScreen from './screens/TipScreen'
import AdditionScreen from './screens/AdditionScreen'
import DiscountScreen from './screens/DiscountScreen'
import ProfitScreen from './screens/ProfitScreen'

// Botão Voltar
import BackButton from './components/BackButton'

// import { decode, encode } from 'base-64'
// !global.btoa ? global.btoa = encode : 0
// !global.atob ? global.atob = decode : 0

// To disable yellow warning boxes
console.disableYellowBox = true

const Stack = createStackNavigator()

export default function App(props) {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator headerMode='none' initialRouteName="MenuScreen">
					<Stack.Screen name="MenuScreen" component={MenuScreen} />
					<Stack.Screen name="TipScreen" component={TipScreen} />
					<Stack.Screen name="AdditionScreen" component={AdditionScreen} />
					<Stack.Screen name="DiscountScreen" component={DiscountScreen} />
					<Stack.Screen name="ProfitScreen" component={ProfitScreen} />
					<Stack.Screen name="BackButton" component={BackButton} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 24,
		backgroundColor: '#FFF',
	},
});

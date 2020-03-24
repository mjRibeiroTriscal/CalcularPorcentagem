import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, FlatList, Switch } from 'react-native'
import { db } from '../constants/Fire'
import * as Font from 'expo-font'

// To disable yellow warning boxes
console.disableYellowBox = true;

let docRef = db.collection('Usuarios')

export default class TestScreen extends Component {

	// state = {
	//     ...initialState,
	//     fontLoaded: false,
	// }

	// async componentDidMount() {
	//     await Font.loadAsync({
	//         'AmaticSC-Bold': require('../assets/fonts/AmaticSC-Bold.ttf'),
	//         'AmaticSC-Regular': require('../assets/fonts/AmaticSC-Regular.ttf'),
	//         'Bangers-Regular': require('../assets/fonts/Bangers-Regular.ttf'),
	//         'CarterOne-Regular': require('../assets/fonts/CarterOne-Regular.ttf'),
	//         'Cinzel-Black': require('../assets/fonts/Cinzel-Black.ttf'),
	//         'Cinzel-Bold': require('../assets/fonts/Cinzel-Bold.ttf'),
	//         'Cinzel-Regular': require('../assets/fonts/Cinzel-Regular.ttf'),
	//         'PermanentMarker-Regular': require('../assets/fonts/PermanentMarker-Regular.ttf'),
	//         'SpecialElite-Regular': require('../assets/fonts/SpecialElite-Regular.ttf')
	//     })

	//     this.setState({ fontLoaded: true })
	// }

	state = {
		nome: '',
		sobrenome: '',
		funcao: '',
		listFire: [],
		value: true,
	}

	setAda = (nome, sobrenome, funcao) => {
		if (nome != '' && sobrenome != '' && funcao != '') {
			docRef.doc(nome).set({
				nome: nome,
				sobrenome: sobrenome,
				funcao: funcao,
			})
		} else {
			alert('Preenche essa bagaça direito!!!')
		}
	}

	componentDidMount() {
		let listFire = []
		docRef.get().then((snapshot) => {
			snapshot.forEach(doc => console.log(doc.id, '=>', doc.data()))
			snapshot.forEach(doc => {
				if (doc.data().name != null ||
					doc.data().sobrenome != null ||
					doc.data().funcao != null) {
					listFire.push(doc.data())
				}
			})
			console.log('listFire ==>> ', listFire)
			this.setState({ listFire })
		}).catch((err) => {
			console.log('Error getting documents', err);
		})
	}

	render() {
		return (
			<View style={styles.container}>
				{/* <View style={styles.container}>
					{
						this.state.fontLoaded ?
							<Text style={[styles.text, { fontSize: this.props.size }]}>{this.props.title}</Text> :
							<ActivityIndicator size='large' color='purple' />
					}
					<Feather style={styles.icon} name={this.props.iconName} size={70} />
				</View> */}
				<Text>Nome: {this.state.nome}</Text>
				<Text>Sobrenome: {this.state.sobrenome}</Text>
				<Text>Função: {this.state.funcao}</Text>
				<TextInput
					style={{
						borderWidth: 1,
						borderColor: 'red',
						width: (Dimensions.get('screen').width - 20),
						margin: 10
					}}
					onChangeText={text => this.setState({ nome: text })}
				/>
				<TextInput
					style={{
						borderWidth: 1,
						borderColor: 'blue',
						width: (Dimensions.get('screen').width - 20),
						margin: 10
					}}
					onChangeText={text => this.setState({ sobrenome: text })}
				/>
				<TextInput
					style={{
						borderWidth: 1,
						borderColor: 'green',
						width: (Dimensions.get('screen').width - 20),
						margin: 10
					}}
					onChangeText={text => this.setState({ funcao: text })}
				/>
				<TouchableOpacity
					style={{
						width: Dimensions.get('screen').width,
						backgroundColor: '#0000DD',
						alignItems: 'center',
						justifyContent: 'center',
						padding: 5,
					}}
					onPress={() => this.setAda(this.state.nome, this.state.sobrenome, this.state.funcao)}
				>
					<Text style={{
						color: '#FFF',
						fontSize: 24,
						fontWeight: '900',
					}}
					>To set data, {this.props.nome}.</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={{
						width: Dimensions.get('screen').width,
						backgroundColor: '#0000DDDD',
						alignItems: 'center',
						justifyContent: 'center',
						padding: 5,
					}}
					onPress={this.getAda}
				>
					<Text style={{
						color: '#FFF',
						fontSize: 24,
						fontWeight: '900',
					}}
					>To get data, {this.props.nome}.</Text>
				</TouchableOpacity>
				<FlatList
					data={this.state.listFire}
					renderItem={({ item }) =>
						<View style={{
							width: Dimensions.get('screen').width,
							alignItems: 'center',
							justifyContent: 'center',
							borderWidth: 1,
							borderColor: '#AAFF0099',
							backgroundColor: '#AABB00CC',
							padding: 15,
						}}>
							<Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Nome: {item.nome}</Text>
							<Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Sobrenome: {item.sobrenome}</Text>
							<Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Função: {item.funcao}</Text>
						</View>
					}
				/>
				<Switch
					value={this.state.value}
					onValueChange={v => this.setState({ value: v })}
				/>
				<Text>{this.state.value ? 'value true' : 'value false'}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
})

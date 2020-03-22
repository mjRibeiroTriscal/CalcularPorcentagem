import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, FlatList } from 'react-native'
import { db } from '../constants/Fire'

// To disable yellow warning boxes
console.disableYellowBox = true;

let docRef = db.collection('Usuarios')

export default class Index extends Component {

	state = {
		nome: '',
		sobrenome: '',
		funcao: '',
		listFire: []
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

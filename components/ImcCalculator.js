import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Slider,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Modal
} from 'react-native';
import HumanGenderIcon from './HumanGenderIcon'
import SymbolGenderIcon from './SymbolGenderIcon'
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const DismissKeybord = ({ children }) =>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>

let initialGenderValue = {
    genero: 'male',
    color: 'initialColor'
}

let initialHeightValue = {
    minValue: 0.6,
    maxValue: 2.5,
    slideValue: 0.6, // Altura
}

let initialAgeWeightValue = {
    idade: 0,
    peso: 0,
}

let initialModalValue = {
    isVisible: false,
}

export default class ImcCalculator extends React.Component {

    state = {
        ...initialHeightValue,
        ...initialGenderValue,
        ...initialAgeWeightValue,
        ...initialModalValue,
        bmiResult: 0,
    }

    handleSliderChange = value => this.setState({ slideValue: value })
    returnHeight = () => parseInt(this.state.slideValue * 100)
    calcularImc = () => {
        let result = 0
        let altura = this.returnHeight() / 100
        try {
            result = Math.floor((this.state.peso / (altura * altura)))
            this.setState({ bmiResult: result })
            console.log('__________________________________')
            console.log('Tipo Peso: ' + typeof this.state.peso)
            console.log('Peso: ' + this.state.peso)
            console.log('Tipo Altura: ' + typeof this.returnHeight())
            console.log('Altura: ' + this.returnHeight())
            console.log('Tipo Resultado: ' + typeof result)
            console.log('Resultado: ' + result)
            console.log('Tipo bmiResult: ' + typeof this.state.bmiResult)
            console.log('bmiResult: ' + this.state.bmiResult)
        } catch (calcError) {
            console.log('Ocorreu um erro: ' + calcError)
        }
        this.setState({ isVisible: true })
    }

    render() {
        return (
            <DismissKeybord>
                <View style={styles.container}>

                    {/* Container de Genero */}
                    <View style={styles.genderContainer}>
                        <TouchableOpacity onPress={() => this.setState({ genero: 'male', color: '' })}>
                            <SymbolGenderIcon genero='male' size={80} />
                        </TouchableOpacity>

                        <HumanGenderIcon genero={this.state.genero} color={this.state.color} size={150} />

                        <TouchableOpacity onPress={() => this.setState({ genero: 'female', color: '' })}>
                            <SymbolGenderIcon genero='female' size={80} />
                        </TouchableOpacity>
                    </View>

                    {/* Container de Idade e Peso */}
                    <View style={styles.ageWeightContainer}>
                        <View style={styles.ageWeightContent}>
                            <Text style={styles.labelAgeWeightText}>Idade:</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                maxLength={3}
                                onChangeText={value => this.setState({ idade: value })}
                            />
                        </View>

                        <View style={styles.ageWeightContent}>
                            <Text style={styles.labelAgeWeightText}>Peso:</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType='numeric'
                                maxLength={3}
                                onChangeText={value => this.setState({ peso: value })}
                            />
                        </View>
                    </View>

                    {/* Container de Altura */}
                    <View style={styles.heightContainer}>
                        <View style={{ width: '100%' }}>
                            <Text style={styles.labelHeightText}>Altura:</Text>
                            <Slider
                                style={{ width: '100%', height: 40 }}
                                minimumValue={this.state.minValue}
                                maximumValue={this.state.maxValue}
                                minimumTrackTintColor="red"
                                maximumTrackTintColor="red"
                                onValueChange={this.handleSliderChange}
                                thumbTintColor='red'
                                step={0.01}
                            />
                        </View>

                        <Text style={styles.heightTextValue}>{this.returnHeight()} cm</Text>
                    </View>

                    {/* Container do Botão 'Calcular' */}
                    <View style={styles.buttonCalculateContainer}>
                        <TouchableOpacity
                            style={styles.buttonCalculate}
                            onPress={this.calcularImc}
                        >
                            <Text style={styles.buttonCalculateText}>Calcular</Text>
                            <Ionicons
                                name='ios-arrow-dropright'
                                size={32}
                                color='green'
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Container do Modal de resultado */}
                    <Modal
                        transparent={true}
                        visible={this.state.isVisible}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={{ color: 'green', fontSize: 32, fontWeight: 'bold' }}>Seu IMC é:</Text>
                                <Text style={{ color: 'green', fontSize: 48, fontWeight: 'bold' }}>{this.state.bmiResult}</Text>
                                
                                <View style={styles.table}>
                                    <Text style={styles.tableTitle}>Informações sobre seu IMC</Text>
                                    <View style={styles.tableRow}>
                                        <Text style={[styles.tableRowItem, styles.tableSubTitle]}>IMC</Text>
                                        <Text style={[styles.tableRowItem, styles.tableSubTitle]}>Classificação</Text>
                                    </View>
                                    <View style={styles.tableRow}>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult <= 18.5 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>Até 18,5</Text>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult <= 18.5 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault} ]}>Magreza</Text>
                                    </View>
                                    <View style={styles.tableRow}>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult > 18.5 && this.state.bmiResult <= 24.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>18,5 - 24,9</Text>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult > 18.5 && this.state.bmiResult <= 24.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>Normal</Text>
                                    </View>
                                    <View style={styles.tableRow}>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult > 24.9 && this.state.bmiResult <= 29.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>25,0 - 29,9</Text>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult > 24.9 && this.state.bmiResult <= 29.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>Sobrepeso</Text>
                                    </View>
                                    <View style={styles.tableRow}>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult > 29.9 && this.state.bmiResult <= 39.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>30,0 - 39,9</Text>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult > 29.9 && this.state.bmiResult <= 39.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>Obesidade</Text>
                                    </View>
                                    <View style={styles.tableRow}>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult >= 39.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>Acima de 40,0</Text>
                                        <Text style={[styles.tableRowItem, this.state.bmiResult >= 39.9 ? {backgroundColor: Colors.tableBackground} : {backgroundColor: Colors.tableBackgroundDefault}]}>Obesidade Grave</Text>
                                    </View>
                                </View>

                                <TouchableOpacity onPress={isVisible => this.setState({ isVisible: false })}>
                                    <Text style={{ color: 'green' }}>Voltar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </View>
            </DismissKeybord>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    labelHeightText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'red',
    },
    labelAgeWeightText: {
        fontSize: 16,
        color: 'red',
        marginBottom: 10,
        textAlign: 'center'
    },
    genderContainer: {
        width: Dimensions.get('screen').width / 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    ageWeightContainer: {
        width: Dimensions.get('screen').width / 1.2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 40,
    },
    ageWeightContent: {
        width: '40%',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 0, 0, 0.5)',
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '10%',
    },
    heightContainer: {
        width: Dimensions.get('screen').width / 1.5,
        alignItems: 'center',
        marginBottom: 30,
    },
    heightTextValue: {
        fontSize: 40,
        color: 'red',
        fontWeight: 'bold',
    },
    buttonCalculateContainer: {
        width: Dimensions.get('screen').width / 1.5,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCalculate: {
        width: Dimensions.get('screen').width / 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonCalculateText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'green',
        textDecorationLine: 'underline',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        width: Dimensions.get('screen').width / 1.2,
        height: Dimensions.get('screen').height / 1.2,
        backgroundColor: '#FFF',
        borderRadius: 50,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    table: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tableTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomColor: 'green',
        color: 'green',
        marginBottom: 15,
    },
    tableSubTitle: {
        fontWeight: 'bold',
    },
    tableRow: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(255, 0, 0, 0.5)',
    },
    tableRowItem: {
        width: '50%',
        textAlign: 'center',
    },
});

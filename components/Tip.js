import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    ActivityIndicator,
    Switch,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal,
    Alert
} from 'react-native'
import * as Font from 'expo-font'
import Rate from './Rate'
import { Feather } from '@expo/vector-icons';

const DismissKeybord = ({ children }) =>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>

initialState = {
    valueAmount: 0,
    porcentToPay: 0,
    amountToPay: 0,
    avalService: 0,
    result: 0,
    switchValue: false,
    badSelected: '#BBBBBB',
    normalSelected: '#BBBBBB',
    goodSelected: '#BBBBBB',
    greatSelected: '#BBBBBB',
}

export default class Tip extends Component {

    state = {
        ...initialState,
        fontLoaded: false,
        isModalVisible: false,
    }
    async componentDidMount() {
        await Font.loadAsync({
            'AmaticSC-Bold': require('../assets/fonts/AmaticSC-Bold.ttf'),
            'CarterOne-Regular': require('../assets/fonts/CarterOne-Regular.ttf'),
        })
        this.setState({ fontLoaded: true })
    }
    showModal = () => this.setState({ isModalVisible: true })
    closeModal = () => this.setState({ isModalVisible: false })
    badService = () => {
        this.setState({
            result: (this.state.valueAmount * 0.07),
            badSelected: '#DC143C', // Principal
            normalSelected: '#BBBBBB',
            goodSelected: '#BBBBBB',
            greatSelected: '#BBBBBB',
        })
        this.showModal()
    }
    normalService = () => {
        this.setState({
            result: (this.state.valueAmount * 0.1),
            badSelected: '#BBBBBB',
            normalSelected: '#7B68EE', // Principal
            goodSelected: '#BBBBBB',
            greatSelected: '#BBBBBB',
        })
        this.showModal()
    }
    goodService = () => {
        this.setState({
            result: (this.state.valueAmount * 0.15),
            badSelected: '#BBBBBB',
            normalSelected: '#BBBBBB',
            goodSelected: '#20B2AA', // Principal
            greatSelected: '#BBBBBB',
        })
        this.showModal()
    }
    greatService = () => {
        this.setState({
            result: (this.state.valueAmount * 0.2),
            badSelected: '#BBBBBB',
            normalSelected: '#BBBBBB',
            goodSelected: '#BBBBBB',
            greatSelected: '#228B22', // Principal
        })
        this.showModal()
    }
    getResultValue = () => {
        let resultado = this.state.result.toFixed(2)
        return resultado
    }
    calcPercentualResult = () => {
        let resultado
        this.state.amountToPay < 0 || this.state.amountToPay > 100 ?
            Alert.alert(
                'Atenção!',
                'Porcentagem deve estar entre 0 e 100!',
                [{ text: 'Voltar', onPress: () => { } }],
                { cancelable: false }
            ) :
            [resultado = (this.state.valueAmount * (this.state.amountToPay / 100)),
            this.setState({ result: resultado, isModalVisible: true })]
    }

    render() {
        return (
            <DismissKeybord>
                <View style={styles.container}>
                    <View>
                        {
                            this.state.fontLoaded ?
                                [<Text key={0} style={styles.text}>Valor da Conta</Text>,
                                <TextInput
                                    key={1}
                                    style={styles.input}
                                    placeholder='125,50'
                                    keyboardType='numeric'
                                    maxLength={6}
                                    onChangeText={val => {
                                        let num = parseFloat(val.replace(',', '.'))
                                        this.setState({ valueAmount: num })
                                    }}
                                />] :
                                <ActivityIndicator size='small' color='purple' />
                        }
                    </View>
                    <View style={styles.switch}>
                        {
                            this.state.fontLoaded ?
                                <Text style={styles.switchText}>Avaliativo</Text> :
                                <ActivityIndicator size='small' color='purple' />
                        }
                        <Switch
                            value={this.state.switchValue}
                            onValueChange={val => this.setState({ switchValue: val })}
                            thumbColor='#800080BB'
                        />
                        {
                            this.state.fontLoaded ?
                                <Text style={styles.switchText}>Percentual</Text> :
                                <ActivityIndicator size='small' color='purple' />
                        }
                    </View>
                    <View>
                        {
                            this.state.switchValue ?
                                this.state.fontLoaded ?
                                    [<Text key={0} style={styles.text}>À Pagar (%)</Text>,
                                    <TextInput
                                        key={1}
                                        style={styles.input}
                                        placeholder='15%'
                                        keyboardType='numeric'
                                        maxLength={3}
                                        onChangeText={v => {
                                            let n = parseFloat(v.replace(',', '.'))
                                            this.setState({ amountToPay: n })
                                        }}
                                    />,
                                    <TouchableOpacity
                                        key={2}
                                        style={styles.calculateBtn}
                                        onPress={this.calcPercentualResult}
                                    >
                                        <Feather style={styles.icon} name='arrow-right-circle' size={42} />
                                    </TouchableOpacity>] :
                                    <ActivityIndicator size='small' color='purple' /> :
                                <View>
                                    <Rate
                                        size={40}
                                        bad={this.badService}
                                        normal={this.normalService}
                                        good={this.goodService}
                                        great={this.greatService}
                                        badSelected={this.state.badSelected}
                                        normalSelected={this.state.normalSelected}
                                        goodSelected={this.state.goodSelected}
                                        greatSelected={this.state.greatSelected}
                                    />
                                </View>
                        }
                    </View>
                    <Modal
                        animationType="slide"
                        animated={true}
                        transparent={true}
                        visible={this.state.isModalVisible}>
                        <TouchableWithoutFeedback
                            onPress={() => this.setState({ isModalVisible: false })}>
                            <View style={styles.modal}>
                                <View style={styles.modalContainer}>
                                    <TouchableOpacity
                                        style={styles.containerResult}
                                        onPress={this.closeModal}>
                                        <Text style={styles.titleResult}>Valor da Gorjeta</Text>
                                        <Text style={styles.displayResult}>R$ {this.getResultValue()}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
            </DismissKeybord>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width / 1.1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        shadowColor: '#800080',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#FFFFFFEE',
    },
    text: {
        color: '#80008077',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'CarterOne-Regular',
    },
    input: {
        width: Dimensions.get('screen').width / 2,
        color: '#800080BB',
        fontSize: 32,
        borderBottomWidth: 1,
        borderBottomColor: 'purple',
        textAlign: 'center',
        fontFamily: 'CarterOne-Regular',
    },
    switch: {
        color: '#800080BB',
        width: '100%',
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    switchText: {
        color: '#80008077',
        fontFamily: 'CarterOne-Regular',
    },
    calculateBtn: {
        alignSelf: 'center',
        paddingTop: 20,
    },
    icon: {
        color: '#800080BB',
    },
    modal: {
        flex: 1,
        backgroundColor: '#00000055',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: '#FFF',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: '#FFF',
    },
    containerResult: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleResult: {
        fontSize: 42,
        color: '#80008077',
        fontFamily: 'AmaticSC-Bold',
    },
    displayResult: {
        fontSize: 72,
        color: '#800080BB',
        fontFamily: 'AmaticSC-Bold',
    },
})

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    ActivityIndicator,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    Alert
} from 'react-native'
import * as Font from 'expo-font'
import { Feather } from '@expo/vector-icons';

const DismissKeybord = ({ children }) =>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>

initialState = {
    valueAmount: 0,
    coustAmount: 0,
    result: 0,
    resultPercent: 0,
}

export default class Profit extends React.Component {

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
    getResultValue = () => {
        let resultado = this.state.result.toFixed(2)
        return resultado
    }
    getResultPercent = () => {
        let resultado = (this.state.result / this.state.valueAmount) * 100
        return resultado
    }
    calcResult = () => {
        let resultado
        this.state.coustAmount > this.state.valueAmount ?
            Alert.alert(
                'Atenção!',
                'Custo é maior que a receita.',
                [{ text: 'Voltar', onPress: () => { } }],
                { cancelable: false }
            ) :
            [resultado = (this.state.valueAmount - this.state.coustAmount),
            this.setState({ result: resultado, isModalVisible: true })]
    }

    render() {
        return (
            <DismissKeybord>
                <View style={styles.container}>
                    <View>
                        {
                            this.state.fontLoaded ?
                                [<Text key={0} style={styles.text}>Receita Total</Text>,
                                <TextInput
                                    key={1}
                                    style={[styles.input, { marginBottom: 25 }]}
                                    placeholder='10.000'
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
                    <View>
                        {
                            this.state.fontLoaded ?
                                [<Text key={0} style={styles.text}>Custo Total</Text>,
                                <TextInput
                                    key={1}
                                    style={[styles.input, { marginBottom: 25 }]}
                                    placeholder='4.000'
                                    keyboardType='numeric'
                                    maxLength={6}
                                    onChangeText={val => {
                                        let num = parseFloat(val.replace(',', '.'))
                                        this.setState({ coustAmount: num })
                                    }}
                                />,
                                <TouchableOpacity
                                    key={2}
                                    style={styles.calculateBtn}
                                    onPress={this.calcResult}
                                >
                                    <Feather style={styles.icon} name='arrow-right-circle' size={42} />
                                </TouchableOpacity>] :
                                <ActivityIndicator size='small' color='purple' />
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
                                        <View style={{ textAlign: "center", alignItems: 'center', justifyContent: 'center', marginBottom: 25 }}>
                                            <Text style={styles.titleResult}>Lucro:</Text>
                                            <Text style={styles.displayResult}>R$ {this.getResultValue()}</Text>
                                        </View>
                                        <View style={{ textAlign: "center", alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={styles.titleResult}>Margem de Lucro:</Text>
                                            <Text style={styles.displayResult}>{this.getResultPercent()}%</Text>
                                        </View>
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
    calculateBtn: {
        alignSelf: 'center',
        paddingTop: 10,
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

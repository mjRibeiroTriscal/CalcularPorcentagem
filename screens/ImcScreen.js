import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import ImcCalculator from '../components/ImcCalculator'

export default class ImcScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImcCalculator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
});

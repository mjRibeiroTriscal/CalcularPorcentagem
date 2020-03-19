import React from 'react'
import {StyleSheet, View, Dimensions} from 'react-native'
import { AdMobBanner } from 'expo-ads-admob'

export default class AdsBanner extends React.Component {

    render() {
        return(
            <View style={styles.adsContainer}>
                <AdMobBanner
                    style={styles.admbBann}
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-4923735736173094/9875614460"
                    onDidFailToReceiveAdWithError={ this.bannerError }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
	adsContainer: {
		width: Dimensions.get('window').width,
		backgroundColor: 'transparent',
		position: "absolute",
		left: 0,
		bottom: 0,
	},
	admbBann: {
        width: Dimensions.get('window').width,
		marginLeft: 'auto',
		marginRight: 'auto',
	}
})
import React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import Screen from '../atoms/Screen';

export default function SplashScreen() {
	return (
		<Screen style={styles.screen}>
			<ImageBackground
				source={require('../../assets/tik_tok_logo.jpeg')}
				style={styles.images}
				blurRadius={Platform.OS === 'android' ? 1 : 1}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen : {
		justifyContent  : 'center',
		alignItems      : 'center',
		width           : '100%',
		height          : '50%',
		// borderColor     : 'blue',
		// borderWidth     : 1,
		backgroundColor : 'black'
	},
	images : {
		width        : '100%',
		height       : '100%',
		alignSelf    : 'center',
		marginBottom : 100,
		// borderColor : 'red',
		// borderWidth : 1,
		transform    : [
			{ scale: 0.5 }
		]
	}
});

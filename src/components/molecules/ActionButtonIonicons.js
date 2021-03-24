import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import { Ionicons } from '@expo/vector-icons';

export default function ActionButtonAnt({ icon, text }) {
	return (
		<View style={styles.container}>
			<Ionicons name={icon} size={50} color="white" style={styles.icon} />
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		justifyContent : 'center',
		alignItems     : 'center',
		marginVertical : 20
	},
	icon      : {},
	text      : {
		fontSize   : 13,
		color      : colorPalette.white,
		fontWeight : 'bold'
	}
});

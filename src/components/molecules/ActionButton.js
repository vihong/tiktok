import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Icon from '../atoms/Icon';

export default function ActionButton({ icon, text, color }) {
	return (
		<View style={styles.container}>
			<Icon
				name={icon}
				size={50}
				color="white"
				style={styles.icon}
				color={color ? color : 'white'}
			/>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		justifyContent : 'center',
		alignItems     : 'center',
		marginVertical : 5
	},
	icon      : {},
	text      : {
		fontSize   : 13,
		color      : colorPalette.white,
		fontWeight : 'bold'
	}
});

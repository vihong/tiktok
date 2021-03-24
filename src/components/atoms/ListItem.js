import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './Icon';
import colorPalette from '../../config/colorPalette';

export default function ListItem({ text, textStyle, icon }) {
	return (
		<View style={styles.container}>
			{icon && <Icon name={icon} style={styles.icon} color={'white'} size={15} />}
			<Text
				style={[
					textStyle,
					styles.text
				]}
				numberOfLines={1}
			>
				{text}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		flexDirection  : 'row',
		justifyContent : 'flex-start',
		marginVertical : 5
	},
	text      : {
		color    : colorPalette.white,
		fontSize : 14
	},
	icon      : {
		paddingRight : 10
	}
});

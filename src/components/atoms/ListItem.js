import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from './Icon';
import colorPalette from '../../config/colorPalette';
import TextTicker from 'react-native-text-ticker';

export default function ListItem({ text, textStyle, icon, textTicker }) {
	return (
		<View style={styles.container}>
			{icon && <Icon name={icon} style={styles.icon} color={'white'} size={15} />}
			{!textTicker ? (
				<Text
					style={[
						styles.text,
						textStyle
					]}
					numberOfLines={1}
				>
					{text}
				</Text>
			) : (
				<TextTicker
					style={[
						styles.textTicker
					]}
					loop
					repeatSpacer={50}
					marqueeDelay={1000} // wait 1 second after one round
					bounceSpeed={100} // by default 50, so 400 is faster
					marqueeOnMount
				>
					{textTicker}
				</TextTicker>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container  : {
		flexDirection  : 'row',
		justifyContent : 'flex-start',
		marginVertical : 5
	},
	text       : {
		color    : colorPalette.white,
		fontSize : 14
	},
	textTicker : {
		width    : '80%',
		color    : colorPalette.white,
		fontSize : 14
	},
	icon       : {
		paddingRight : 10
	}
});

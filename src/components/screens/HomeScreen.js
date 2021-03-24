import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import Screen from '../atoms/Screen';
import Post from '../atoms/Post';

export default function HomeScreen() {
	return (
		<Screen>
			<Post />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#fff',
		alignItems      : 'center',
		justifyContent  : 'center'
	}
});

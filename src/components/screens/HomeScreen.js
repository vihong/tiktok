import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import Screen from '../atoms/Screen';

export default function HomeScreen() {
	return (
		<Screen>
			<Text>HomeScreen</Text>
			<Text>Step One</Text>
			<Icon name="step-forward" size={30} />
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

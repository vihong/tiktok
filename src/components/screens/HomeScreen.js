import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
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
	container : {}
});

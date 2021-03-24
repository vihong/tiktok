import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function BottomInfo() {
	return (
		<View style={styles.container}>
			<Text>@peter</Text>
			<Text>video_details</Text>
			<Text>song_name</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		borderColor    : 'blue',
		borderWidth    : 2,
		justifyContent : 'flex-end'
	}
});

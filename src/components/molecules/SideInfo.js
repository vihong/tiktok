import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SideInfo() {
	return (
		<View style={styles.container}>
			<Text>user_profile_picture</Text>
			<Text>likeIcon + likeCount</Text>
			<Text>messagesIcon + messagesCount</Text>
			<Text>shareIcon + shareCount</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		borderWidth : 2,
		borderColor : 'red',
		alignSelf   : 'flex-end',
		color       : 'white'
	}
});

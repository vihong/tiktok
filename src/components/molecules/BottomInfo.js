import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ListItem from '../atoms/ListItem';

export default function BottomInfo({ post }) {
	return (
		<View style={styles.container}>
			<ListItem text={`@${post.user.name}`} textStyle={styles.username} />
			<ListItem text={'#dentiste #funny #neFaitesJamaisCa'} textStyle={styles.hashtag} />
			<ListItem text={post.description} />
			{post.songName && (
				<ListItem text={post.songName} icon="music-note" textStyle={styles.song} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container         : {
		// borderColor    : 'blue',
		// borderWidth    : 2,
		justifyContent : 'flex-end',
		paddingBottom  : 30,
		paddingLeft    : '4%'
	},
	username          : {
		fontWeight : '500',
		fontSize   : 16
	},
	hashtag           : {},
	video_description : {},
	song              : {
		fontWeight : '300',
		width      : '50%'
	}
});

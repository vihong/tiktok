import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../atoms/Screen';
import Post from '../atoms/Post';

const post1 = {
	id          : 'p1',
	videoUri    :
		'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
	user        : {
		id       : 'u1',
		name     : 'chrisMartin',
		imageUri :
			'https://media1.popsugar-assets.com/files/thumbor/N-BYe6hX5qd3vWPb9G38c8kTFN8/32x75:2123x2166/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/17/853/n/1922398/dd07b6ea5e7125236ac023.26390298_/i/Chris-Martin.jpg'
	},
	description : 'Awesome crowd tonight in Paris!! 😊 🙌',
	songName    : 'Coldplay - Adventure of a lifetime',
	likes       : 123,
	comments    : 12,
	shares      : 44
};

export default function HomeScreen() {
	return (
		<Screen>
			<Post post={post1} key={post1.id} />
		</Screen>
	);
}

const styles = StyleSheet.create({
	container : {}
});

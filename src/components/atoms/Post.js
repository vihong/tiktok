import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function Post() {
	const [
		isVideoPaused,
		setIsVideoPaused
	] = useState(true);

	const onPlayPause = () => {
		console.log('isPaused');
		setIsVideoPaused(!isVideoPaused);
	};

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={onPlayPause}>
				<Video
					source={{
						uri : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
					}}
					rate={1.0}
					volume={1.0}
					isMuted={false}
					resizeMode="cover"
					shouldPlay={isVideoPaused}
					isLooping={false}
					style={styles.video}
					onError={(error) => console.error('error: ', error)}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		width  : '100%',
		height : Dimensions.get('window').height
	},
	video     : {
		position : 'absolute',
		top      : 0,
		left     : 0,
		right    : 0,
		bottom   : 0
	}
});

import React, { useState } from 'react';
import {
	Dimensions,
	PlatformColor,
	StatusBar,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import Constants from 'expo-constants';
import { Video, AVPlaybackStatus } from 'expo-av';
import BottomInfo from '../molecules/BottomInfo';
import SideInfo from '../molecules/SideInfo';

export default function Post(props) {
	const [
		isVideoPaused,
		setIsVideoPaused
	] = useState(true);

	const [
		post,
		setPost
	] = useState(props.post);

	const [
		hasLiked,
		setHasLiked
	] = useState(false);

	const onPlayPause = () => {
		setIsVideoPaused(!isVideoPaused);
	};

	const handleLikePress = () => {
		const likesToAdd = hasLiked ? -1 : 1;
		setPost({
			...post,
			likes : post.likes + likesToAdd
		});
		setHasLiked(!hasLiked);
	};

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={onPlayPause}>
				<Video
					source={{
						uri : post.videoUri
					}}
					rate={1.0}
					volume={0.5}
					isMuted={false}
					resizeMode="cover"
					shouldPlay={isVideoPaused}
					isLooping={true}
					style={styles.video}
					onError={(error) => console.error('error: ', error)}
				/>
			</TouchableWithoutFeedback>
			<SideInfo post={post} onLikePress={handleLikePress} hasLiked={hasLiked} />
			<BottomInfo post={post} />
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		width          : '100%',
		height         : Dimensions.get('window').height - Constants.statusBarHeight,
		justifyContent : 'flex-end'
	},
	video     : {
		position : 'absolute',
		top      : 0,
		left     : 0,
		right    : 0,
		bottom   : 0
	}
});

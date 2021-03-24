import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import ActionButton from './ActionButton';
import ActionButtonIonicons from './ActionButtonIonicons';

export default function SideInfo({ post, onLikePress, hasLiked }) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{
					uri : post.user.imageUri
				}}
			/>
			<TouchableOpacity onPress={onLikePress}>
				<ActionButton
					icon="heart"
					text={post.likes}
					style={styles.likeButton}
					color={hasLiked ? colorPalette.backgroundRed : 'white'}
				/>
			</TouchableOpacity>
			<ActionButtonIonicons
				icon="chatbubble-ellipses-sharp"
				text={post.comments}
				style={styles.comments}
			/>
			<ActionButton icon="share" text={post.shares} style={styles.likeButton} />
		</View>
	);
}

const styles = StyleSheet.create({
	container  : {
		// borderWidth       : 2,
		// borderColor       : 'red',
		alignSelf      : 'flex-end',
		color          : 'white',
		justifyContent : 'center',
		alignItems     : 'center',
		paddingRight   : 15
	},
	image      : {
		width        : 60,
		height       : 60,
		borderRadius : 50,
		borderWidth  : 1,
		borderColor  : colorPalette.white,
		marginBottom : 20,
		transform    : [
			{ scale: 1.0 }
		]
	},
	likeButton : {
		borderWidth : 1
	},
	comments   : {}
});

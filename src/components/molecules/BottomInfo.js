import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ListItem from '../atoms/ListItem';

export default function BottomInfo() {
	return (
		<View style={styles.container}>
			<ListItem text={'@tikTokDoc'} textStyle={styles.username} />
			<ListItem text={'#dentiste #funny #neFaitesJamaisCa'} textStyle={styles.hashtag} />
			<ListItem text={'Elle se brosse les dents avec un balai !!'} />
			<ListItem
				text={'Coldplay - Adventure of a lifetime'}
				icon="music-note"
				textStyle={styles.song}
			/>
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
		fontWeight : 'bold'
	},
	hashtag           : {},
	video_description : {},
	song              : {
		fontWeight : '300',
		width      : '50%'
	}
});

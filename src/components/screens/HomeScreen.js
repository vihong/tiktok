import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';

import { Dimensions, FlatList, StyleSheet } from 'react-native';
import Screen from '../atoms/Screen';
import Post from '../atoms/Post';
import posts from '../../data/posts';

export default function HomeScreen() {
	return (
		<Screen>
			<FlatList
				data={posts}
				renderItem={({ item }) => <Post post={item} key={item.id} />}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get('window').height - Constants.statusBarHeight}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container : {}
});

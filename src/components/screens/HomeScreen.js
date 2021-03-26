import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Screen from '../atoms/Screen';
import Post from '../atoms/Post';
import posts from '../../data/posts';
import SplashScreen from './SplashScreen';

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
		// <SplashScreen />
	);
}

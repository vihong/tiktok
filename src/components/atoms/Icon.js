import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

/**
 * 
 * @param {*} pokemon add the usual props you would add for MatericalCommunityIcons
 * @returns 
 */

export default function Icon({ style, ...restProps }) {
	const styles = StyleSheet.create({
		container : {
			alignItems     : 'center',
			justifyContent : 'center'
		}
	});

	return (
		<View
			style={[
				styles.container,
				style
			]}
		>
			<MaterialCommunityIcons {...restProps} />
		</View>
	);
}

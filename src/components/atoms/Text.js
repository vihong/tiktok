import React from 'react';
import { Text as AppText } from 'react-native';
import defaultStyles from '../../config/defaultStyles';

export default function Text({ onPress, style, children, ...restProps }) {
	return (
		<AppText
			style={[
				defaultStyles.AppText,
				style
			]}
			onPress={onPress && onPress}
			{...restProps}
		>
			{children}
		</AppText>
	);
}

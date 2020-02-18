import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import NavButtons from './NavButtons'

export default props => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home</Text>
			<NavButtons />
		</View>
	)
}
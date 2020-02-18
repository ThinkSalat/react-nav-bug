import React from 'react'
import { View, Text } from 'react-native'
import NavButtons from './NavButtons'


const Profile = props => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Profile</Text>
			<NavButtons />
		</View>
	)
}

export default Profile
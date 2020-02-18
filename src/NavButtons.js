import React from 'react'
import { View, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { actions } from './redux/reducer'
import { screens } from '../navigator'



const NavButtons = () => {
	const dispatch = useDispatch()
	const nav = page => () => dispatch(actions.navigateToPage(page))
	return (
		<View>
			{Object.keys(screens).map( page => <Button key={page} onPress={nav(page)} title={"Go To " + page}/>)}
		</View>
	)
}

export default NavButtons
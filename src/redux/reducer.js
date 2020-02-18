import redux from 'redux'

export const actionTypes = {
	NAVIGATE: 'NAVIGATE'
}

const initialState = {
	currentPage: 'Home'
}

export const reducer = (state = initialState, action) => {
	return state
}


export const actions = {
	navigateToPage: page => ({ type: actionTypes.NAVIGATE, page })
}
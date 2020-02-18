import { select, take, fork, put, call, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { navigate, goBack, resetStack } from '../NavigationService'
import { actionTypes } from './redux/reducer'

export function* sagaLogger() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}

function* navigateToPage(action) {
	navigate(action.page)
}


export function* mainSaga() {
	yield all([
		yield takeLatest(actionTypes.NAVIGATE, navigateToPage)
	])
}
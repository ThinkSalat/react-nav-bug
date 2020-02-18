import React, { Component } from 'react';
import {
  AppState,
  Alert,
  Platform,
  Linking,
  View,
  BackHandler,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigator';
import * as NavigationService from './NavigationService';
import createStore from './store';
const store = createStore()
const App = () => {
	return (
		<Provider {...{ store }}>
			<AppNavigator ref={nav => NavigationService.setNavigator(nav || {})} />
		</Provider>
	)
}

export default App;

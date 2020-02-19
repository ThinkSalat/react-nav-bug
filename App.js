import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigator';
import { setNavigator, isMountedRef, navigationRef } from './NavigationService';
import createStore from './store';

const store = createStore()
const App = () => {
  useEffect(() => {
    isMountedRef.current = true;

    return () => isMountedRef.current = false;
	}, [])
	
	return (
		<Provider {...{ store }}>
			<AppNavigator ref={navigationRef} />
		</Provider>
	)
}

export default App;

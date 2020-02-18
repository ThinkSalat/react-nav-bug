import { compose, createStore, applyMiddleware , combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { sagaLogger, mainSaga } from './src/mainSaga';
import { reducer } from './src/redux/reducer';

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25,
  }))
|| compose;


const sagaMiddleware = createSagaMiddleware()

export default () => {
	const store = createStore(
		reducer,
		composeEnhancers(applyMiddleware(sagaMiddleware))
	)

	sagaMiddleware.run(mainSaga)
	return store
}
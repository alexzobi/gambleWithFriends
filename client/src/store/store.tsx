import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers'

declare let window: any;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer)


const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = composeEnhancers(applyMiddleware(...middleware));
export const store = createStore(
  persistedReducer,
  middlewareList,
);

export const persistor = persistStore(store)
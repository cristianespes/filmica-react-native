import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../redux';

const reducer = combineReducers(reducers);
export const store = createStore(reducer, applyMiddleware(thunk));

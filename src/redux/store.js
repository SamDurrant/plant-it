import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


// Reducers
import goalReducer from './reducers/goalReducer';
import authReducer from './reducers/authReducer';

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  goal: goalReducer,
  auth: authReducer
})


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;
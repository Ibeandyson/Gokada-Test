import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'




import {
    newsDataReducer,
} from './Reducers';

export const initialState = { 
    newsData: [],
    
}

const  reducers = combineReducers({
     //STORE
     newsData: newsDataReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,initialState,  composeEnhancer(applyMiddleware(thunk)))


export default store;
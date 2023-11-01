import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllfoodReducer } from "./reducers/foodReducer";

const rootReducer = combineReducers({
    getAllfoodReducer: getAllfoodReducer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

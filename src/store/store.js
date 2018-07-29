import { combineReducers, createStore } from 'redux';

import { homeReducer as home } from "../containers/home/home.reducer";


export const store = createStore(
    combineReducers({
        home,
    }),
);
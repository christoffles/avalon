import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';

import { homeReducer as home } from "../containers/home/home.reducer";


export const store = createStore(
    combineReducers({
        home,
        form,
    }),
);
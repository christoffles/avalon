import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { reducer as form } from 'redux-form';

import { createRoomEpic, joinRoomEpic } from "../containers/enter-room/enter-room.epics";

import { homeReducer as home } from '../containers/home/home.reducer';
import { enterRoomReducer as enterRoom } from '../containers/enter-room/enter-room.reducer';

const rootReducer = combineReducers({
    home,
    form,
    enterRoom,
});

const rootEpic = combineEpics(
    createRoomEpic,
    joinRoomEpic,
);

const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
);

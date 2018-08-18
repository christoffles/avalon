import { Observable } from 'rxjs';

import { EnterRoomActions } from "./enter-room.actions";
import { createRoom, joinRoom } from "../../database/pregame";


export const createRoomEpic = (action$, store) =>
    action$.ofType(EnterRoomActions.CREATE_ROOM)
        .map(action => {
            return createRoom(action.roomId, action.userId)
        });


export const joinRoomEpic = (action$, store) =>
    action$.ofType(EnterRoomActions.JOIN_ROOM)
        .map(action => {
            return joinRoom(action.roomId, action.userId)
        });
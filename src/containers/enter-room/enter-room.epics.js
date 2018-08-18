import { Observable } from 'rxjs';

import { EnterRoomActions } from "./enter-room.actions";
import { createRoom } from "../../database/pregame";


export const createRoomEpic = (action$, store) =>
    action$.ofType(EnterRoomActions.CREATE_ROOM)
        .map(action => {
            return createRoom(action.roomId, action.userId, (snapshot) => console.log('from epic', snapshot)); // TODO update state when listener triggers
        });


export const joinRoomEpic = (action$, store) =>
    action$.ofType(EnterRoomActions.JOIN_ROOM)
        .map(action => {
            return {type: EnterRoomActions.JOIN_ROOM_SUCCESS};
        });
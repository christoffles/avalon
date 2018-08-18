import { database } from '../config'
import { EnterRoomActions } from "../../containers/enter-room/enter-room.actions";

// caller sets redux state as 'in pre-game' - afterwards, updateState will update
export const createRoom = (roomId, userId, updateState) => {
    console.log('creating a room!');
    database.ref('games/' + roomId).once('value', snapshot => {
        console.log('checking for existing room', snapshot);
        if (snapshot.exists()) {
            console.log('exists, returning');
            return {
                type: EnterRoomActions.CREATE_ROOM_FAILURE,
            }
        } else {
            // create the room
            console.log('creating room');
            database.ref('games/' + roomId).set({
                owner: userId,
                status: 'open',
                participants: [ userId ]
            });

            // attach a listener
            // updateState is a function that dispatches an action to keep redux state consistent with realtime db
            database.ref('games/' + roomId).on('value', (snapshot) => {
                updateState(snapshot);
            });

            return {
                type: EnterRoomActions.CREATE_ROOM_SUCCESS,
                roomId: roomId,
            };
        }
    });

    return {
        type: 'CREATE_ROOM_PENDING',
    }
};

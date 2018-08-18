import { database } from '../config'
import { EnterRoomActions } from "../../containers/enter-room/enter-room.actions";

const updateGameState = snapshot => {}; // todo in card 23

// caller sets redux state as 'in pre-game' - afterwards, updateState will update
export const createRoom = (roomId, userId) => {
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
            // keep redux state consistent with realtime db
            database.ref('games/' + roomId).on('value', (snapshot) => {
                updateGameState(snapshot);
            });

            return {
                type: EnterRoomActions.CREATE_ROOM_SUCCESS,
                roomId: roomId,
            };
        }
    });

    return {
        type: EnterRoomActions.CREATE_ROOM_PENDING,
    }
};

export const joinRoom = (roomId, userId) => {
    console.log('joining a room');
    database.ref('games/' + roomId).once('value', snapshot => {
        if (snapshot.exists() && snapshot.val().status === 'open' && !snapshot.val().participants.includes(userId)) {
            console.log('room found');
            const newState = {
                ...snapshot.val(),
                participants: snapshot.val().participants.concat([userId])
            };

            database.ref('games/' + roomId).update(newState);

            database.ref('games' + roomId).on('value', snapshot => {
                updateGameState(snapshot.val());
            });

            return {
                type: EnterRoomActions.JOIN_ROOM_SUCCESS,
                roomId: roomId,
            }
        } else {
            return {
                type: EnterRoomActions.JOIN_ROOM_FAILURE,
            }
        }
    });

    return {
        type: EnterRoomActions.JOIN_ROOM_PENDING,
    }
};
import { database } from '../config'
import { EnterRoomActions } from '../../containers/enter-room/enter-room.actions';
import NavigatorService from '../../navigation/navigation';

const updateGameState = snapshot => {console.log('db state updated', snapshot)}; // todo in card 23

const attachListeners = (roomId) => {
    // game start - go to next screen
    database.ref('games/' + roomId + '/status').on('value', (snapshot) => {
        updateGameState(snapshot);
    });

    // update list of people in room
    database.ref('games/' + roomId + '/participants').on('value', (snapshot) => {
        updateGameState(snapshot);
    });
};

// caller sets redux state as 'in pre-game' - afterwards, updateState will update
export const createRoom = (roomId, userId) => {
    console.log('try creating a room');
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

            attachListeners(roomId);
            NavigatorService.navigate('HelloWorld'); // TODO change this to actual next screen

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
    console.log('try joining a room');
    database.ref('games/' + roomId).once('value', snapshot => {
        if (snapshot.exists() && snapshot.val().status === 'open' && !snapshot.val().participants.includes(userId)) {
            console.log('room found');
            const newState = {
                ...snapshot.val(),
                participants: snapshot.val().participants.concat([userId])
            };

            database.ref('games/' + roomId).update(newState);

            attachListeners(roomId);
            NavigatorService.navigate('HelloWorld'); // TODO change this to actual next screen

            return {
                type: EnterRoomActions.JOIN_ROOM_SUCCESS,
                roomId: roomId,
            }
        } else {
            console.log('could not join room');
            return {
                type: EnterRoomActions.JOIN_ROOM_FAILURE,
            }
        }
    });

    return {
        type: EnterRoomActions.JOIN_ROOM_PENDING,
    }
};

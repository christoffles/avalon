import { database } from '../config'

export const createRoom = (userId, updateState) => {
    // create the room
    database.ref('games/' + userId).set({
        owner: userId,
        status: 'open',
        participants: [ userId ]
    });

    // attach a listener
    // upateState is a function that dispatches an action to keep redux state consistent with realtime db
    database.ref('games/' + userId).on('value', (snapshot) => {
        updateState(snapshot)

    });
};


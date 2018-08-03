import { database } from '../config'

// caller sets redux state as 'in pre-game' - afterwards, updateState will update
export const createRoom = (userId, updateState) => {
    const roomId = 0; // todo generate unique room ids
    // create the room
    database.ref('games/' + roomId).set({
        owner: userId,
        status: 'open',
        participants: [ userId ]
    });

    // attach a listener
    // updateState is a function that dispatches an action to keep redux state consistent with realtime db
    database.ref('games/' + roomId).on('value', (snapshot) => {
        updateState(snapshot);
        console.log(snapshot);
    });
};


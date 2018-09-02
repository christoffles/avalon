export const EnterRoomActions = {
    CREATE_ROOM: 'CREATE_ROOM',
    CREATE_ROOM_SUCCESS: 'CREATE_ROOM_SUCCESS',
    CREATE_ROOM_FAILURE: 'CREATE_ROOM_FAILURE',
    CREATE_ROOM_PENDING: 'CREATE_ROOM_PENDING',
    JOIN_ROOM: 'JOIN_ROOM',
    JOIN_ROOM_SUCCESS: 'JOIN_ROOM_SUCCESS',
    JOIN_ROOM_FAILURE: 'JOIN_ROOM_FAILURE',
    JOIN_ROOM_PENDING: 'JOIN_ROOM_PENDING',
};

export const createRoomAction = ({ roomId, userId} ) => {
    return ({
        type: EnterRoomActions.CREATE_ROOM,
        roomId: roomId,
        userId: userId,
    })
};

export const joinRoomAction = ({ roomId, userId }) => {
    return ({
        type: EnterRoomActions.JOIN_ROOM,
        roomId: roomId,
        userId: userId,
    })
};

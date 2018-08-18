import { EnterRoomActions } from "./enter-room.actions";

const initialEnterRoomState = {};

export function enterRoomReducer(state = initialEnterRoomState, action) {
    switch(action.type) {
        case EnterRoomActions.CREATE_ROOM:
            return {
                ...state,
            };
        case EnterRoomActions.CREATE_ROOM_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case EnterRoomActions.CREATE_ROOM_FAILURE:
            return {
                ...state,
                ...action.payload,
            };
        case EnterRoomActions.JOIN_ROOM:
            return {
                ...state,
            };
        case EnterRoomActions.JOIN_ROOM_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        case EnterRoomActions.JOIN_ROOM_FAILURE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return {
                ...state,
            };
    }
}
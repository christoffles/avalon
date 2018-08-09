import { HomeActions } from './home.actions';

const initialHomeState = {
    hello: true,
};

export function homeReducer(state = initialHomeState, action) {
     console.log('state', state);
    switch (action.type) {
        case HomeActions.CLICK_BUTTON:
            return {
                ...state,
                hello: !state.hello,
            };
        default:
            return {
                ...state,
            };
    }
}
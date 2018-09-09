import * as React from 'react';
import { connect } from 'react-redux';

import { EnterRoomForm } from '../../components';
import { createRoomAction, joinRoomAction } from './enter-room.actions';


const EnterRoom = ({ create, join }) => {
    return (<EnterRoomForm create={create} join={join} />)
};

const mapDispatchToProps = {
    create: createRoomAction,
    join: joinRoomAction
};

export const EnterRoomContainer = connect(null, mapDispatchToProps)(EnterRoom);

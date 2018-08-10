import * as React from 'react';
import { connect } from 'react-redux';

import { EnterRoomForm } from "../../components";

const create = values => console.log('Create room', values); // TODO make backend call
const join = values => console.log('Join room', values);


const EnterRoom = () => {
    return (<EnterRoomForm create={create} join={join} />)
};

export const EnterRoomContainer = connect(null, null)(EnterRoom);
import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import { EnterRoomContainer } from '../containers/enter-room';
import { HomeContainer } from '../containers/home';

export const SwitchNavigator = createSwitchNavigator({
  EnterRoom: { screen: EnterRoomContainer },
  HelloWorld: { screen: HomeContainer },
}, {
  initialRouteName: 'EnterRoom',
});

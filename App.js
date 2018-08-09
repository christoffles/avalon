import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { store } from './src/store'
import { HomeContainer } from "./src/containers/home";
import { SignupContainer } from "./src/containers/signup";

global.navigator = { userAgent: 'all' };


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <View style={styles.container}>
            <SignupContainer />
          </View>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});


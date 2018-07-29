import * as React from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'react-native';

import { clickButtonAction } from "./home.actions";
import { HelloWorldComponent } from "../../components/hello-world";
import { GoodbyeWorldComponent } from "../../components/goodbye-world";

const Home = ({ hello, handlePress }) => {
    if (hello) {
        return (<View>
            <Button title="Click me" onPress={handlePress} />
            <HelloWorldComponent/>
        </View>);
    }
    return (<View>
        <Button title="Click me" onPress={handlePress} />
        <GoodbyeWorldComponent/>
    </View>);
};

const mapStateToProps = state => ({
    hello: state.home.hello,
});

const mapDispatchToProps = {
    handlePress: clickButtonAction,
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { reduxForm, Field } from 'redux-form';

const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput onChangeText={onChange} {...restInput} />
};

const EnterRoom = ({ create, join , handleSubmit, pristine, submitting, invalid }) => {
    return (
        <View>
            <Text>User ID:</Text>
            <Field name='userId' component={renderInput}/>
            <TouchableOpacity onPress={handleSubmit(create)}
                              disabled={pristine || submitting || invalid} >
                <Text>Create Room</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit(join)}
                              disabled={pristine || submitting || invalid}>
                <Text>Join Room</Text>
            </TouchableOpacity>
        </View>
    );
};

export const EnterRoomForm = reduxForm({
    form: 'signup',
})(EnterRoom);

import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { reduxForm, Field } from "redux-form";

const submit = values => console.log('Signup form submit:', values);

const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput onChangeText={onChange} {...restInput} />
};

const Signup = ({ handleSubmit }) => (
    <View>
        <Text>User ID:</Text>
        <Field name='userId' component={renderInput}/>
        <TouchableOpacity onPress={handleSubmit(submit)}>
            <Text>Submit</Text>
        </TouchableOpacity>
    </View>
);

export const SignupForm = reduxForm({
    form: 'signup',
})(Signup);

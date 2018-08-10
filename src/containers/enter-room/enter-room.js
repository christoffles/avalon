import * as React from 'react';
import { connect } from 'react-redux';

import { SignupForm } from "../../components";


const Signup = () => {
    return (<SignupForm />)
};

export const SignupContainer = connect(null, null)(Signup);
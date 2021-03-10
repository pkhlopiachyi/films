import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


class LoginScreenComponent extends React.Component {
    public render() {
        return (
            <div></div>
        );
    }
}

export const LoginScreen = compose(connect())(LoginScreenComponent);

import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Input } from '../../components';

interface State {
    email: string;
    password: string;
}

interface DispatchProps {

}

type Props = DispatchProps;

class LoginScreenComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    public render() {
        const { email, password } = this.state;

        return (
            <div className="loginScreen">
                <div className="loginScreen__form">
                    <header className="loginScreen__form__header">
                        LOGIN
                    </header>
                    <div className="loginScreen__form__body">
                        <Input
                            type="text"
                            label="Email"
                            placeholder="Enter your email"
                            classNameInput="loginScreen__form__input"
                            autoFocus={true}
                            inputValue={email}
                            handleChangeInput={value => this.handleChangeInput(value, 'email')}
                        />
                        <Input
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            classNameInput="loginScreen__form__input"
                            autoFocus={true}
                            inputValue={password}
                            handleChangeInput={value => this.handleChangeInput(value, 'password')}
                        />
                    </div>
                    <footer className="loginScreen__form__footer">
                        <Button
                            size="lg"
                            type="button"
                            disabled={!email.length || !password.length}
                        >
                            Login
                        </Button>
                    </footer>
                </div>
            </div>
        );
    }

    private handleChangeInput = (value: string, key: string) => {
        //@ts-ignore
        this.setState({
            [key]: value,
        });
    };
}

export const LoginScreen = compose(connect())(LoginScreenComponent);

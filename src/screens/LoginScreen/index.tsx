import React from 'react';
import { Button } from 'react-bootstrap';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { Input } from '../../components';
import { login, RootState } from '../../modules';

interface State {
    email: string;
    password: string;
}

interface DispatchProps {
    login: typeof login;
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
            <div className="authScreen">
                <div className="authScreen__form">
                    <header className="authScreen__form__header">
                        LOGIN
                    </header>
                    <div className="authScreen__form__body">
                        <Input
                            type="text"
                            label="Email"
                            placeholder="Enter your email"
                            classNameInput="authScreen__form__body__input"
                            autoFocus={true}
                            inputValue={email}
                            handleChangeInput={value => this.handleChangeInput(value, 'email')}
                        />
                        <Input
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            classNameInput="authScreen__form__body__input"
                            autoFocus={true}
                            inputValue={password}
                            handleChangeInput={value => this.handleChangeInput(value, 'password')}
                        />
                    </div>
                    <footer className="authScreen__form__footer">
                        <Button
                            block
                            type="button"
                            disabled={!email.length || !password.length}
                            onClick={this.handleLogin}
                        >
                            Login
                        </Button>
                    </footer>
                </div>
            </div>
        );
    }

    private handleLogin = () => {
        const { email, password } = this.state;

        this.props.login({ email, password });
    };

    private handleChangeInput = (value: string, key: string) => {
        //@ts-ignore
        this.setState({
            [key]: value,
        });
    };
}

const mapStateToProps: MapStateToProps<{}, {}, RootState> = state => ({});


const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    login: payload => dispatch(login(payload)),
});

export const LoginScreen = connect(mapStateToProps, mapDispatchProps)(LoginScreenComponent);

import moment from 'moment';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { CustomDropdown, Input } from '../../components';
import { CustomDatePicker } from '../../components/DatePicker';
import { genders } from '../../constants';
import { register } from '../../modules';

export const RegisterScreen = () => {
    const dispath = useDispatch();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ username, setUsername ] = useState('');
    const [ birthday, setBirthday ] = useState(moment(new Date()).format('DD.MM.YYYY'));
    const [ gender, setGender ] = useState('');

    const handleRegister = () => {
        dispath(register({
            email,
            password,
            username,
            birthday,
            gender,
        }));
    };

    const changeDate = (date: Date) => {
        setBirthday(moment(date).format('DD.MM.YYYY'));
    };

    return (
        <div className="authScreen">
            <div className="authScreen__form">
                <header className="authScreen__form__header">
                    REGISTER
                </header>
                <div className="authScreen__form__body">
                    <Input
                        type="text"
                        label="Email"
                        placeholder="Enter your email"
                        classNameInput="authScreen__form__body__input"
                        autoFocus={true}
                        inputValue={email}
                        handleChangeInput={setEmail}
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        classNameInput="authScreen__form__body__input"
                        inputValue={password}
                        handleChangeInput={setPassword}
                    />
                    <Input
                        type="text"
                        label="Username"
                        placeholder="Enter your username"
                        classNameInput="authScreen__form__body__input"
                        inputValue={username}
                        handleChangeInput={setUsername}
                    />
                    <CustomDropdown
                        list={genders}
                        placeholder="Select your gender"
                        onSelect={setGender}
                        label={'Gender'}
                    />
                    <CustomDatePicker
                        value={birthday}
                        changeDate={changeDate}
                        placeholder="Select your birthday"
                    />
                </div>
                <footer className="authScreen__form__footer">
                    <Button
                        block
                        type="button"
                        disabled={!email.length || !password.length}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                </footer>
            </div>
        </div>
    );
};

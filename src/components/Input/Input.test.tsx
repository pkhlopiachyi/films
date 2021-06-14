import * as React from 'react';
import { Input, InputProps } from './';

import { shallow } from 'enzyme';

const defaults: InputProps = {
    type: '',
    label: '',
    handleChangeInput: jest.fn(),
    inputValue: '',
    handleFocusInput: jest.fn(),
    classNameLabel: '',
    classNameInput: '',
    placeholder: '',
    autoFocus: false,
};

const setup = (props: Partial<InputProps> = {}) =>
    shallow(<Input {...{ ...defaults, ...props }} />);

describe('CustomInput component', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        expect(wrapper).toBeDefined();
    });
});
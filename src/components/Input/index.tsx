import * as React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

export interface InputProps {
    type: string;
    label: string;
    handleChangeInput?: (value: string) => void;
    inputValue: string | number;
    handleFocusInput?: () => void;
    placeholder?: string;
    classNameLabel?: string;
    classNameInput?: string;
    autoFocus?: boolean;
    id?: string;
    handleClick?: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void);
    isDisabled?: boolean;
}

interface OnChangeEvent {
    target: {
        value: string;
    };
}

export class Input extends React.Component<InputProps> {
    public render() {
        const {
            label,
            placeholder,
            inputValue,
            classNameLabel,
            type,
            autoFocus,
            id,
            handleClick,
            isDisabled,
        } = this.props;

        return (
            <React.Fragment>
                <div className="custom-input">
                    {inputValue &&
                    <label className={classNameLabel}>
                        {label}
                    </label>}
                    <InputGroup size="lg">
                        <FormControl
                            size="lg"
                            type={type}
                            value={inputValue.toString()}
                            placeholder={placeholder}
                            autoFocus={autoFocus}
                            onFocus={this.props.handleFocusInput}
                            onBlur={this.props.handleFocusInput}
                            onChange={e => this.handleChangeValue(e)}
                            id={id}
                            onClick={handleClick}
                            disabled={isDisabled}
                        />
                    </InputGroup>
                </div>
            </React.Fragment>
        );
    }

    private handleChangeValue = (e: OnChangeEvent) => {
        this.props.handleChangeInput && this.props.handleChangeInput(e.target.value);
    };
}

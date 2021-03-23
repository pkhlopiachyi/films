import React from 'react';
import DatePicker from 'react-datepicker';

interface CustomDatePickerProps {
    value: string;
    changeDate: (date: Date) => void;
    placeholder: string;
}

export const CustomDatePicker = (props: CustomDatePickerProps) => {
    const { value, changeDate, placeholder } = props;

    return (
        <DatePicker
            dateFormat="DD.MM.YYYY"
            value={value}
            onChange={changeDate}
            placeholderText={placeholder}
        />
    );
};

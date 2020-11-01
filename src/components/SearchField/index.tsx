import React from 'react';
import { Button } from 'react-bootstrap';
import { Input } from '../Input';

interface SearchFieldProps {
    handeChangeInput: (value: string, key: string) => void;
    inputValue: string;
    search: () => void;
    getList: (isAlphabet: boolean) => void;
}

const SearchFieldComponent: React.FC<SearchFieldProps> = ({ inputValue, handeChangeInput, search, getList }) => {
    return (
        <div className="search-field">
            <Input
                classNameInput="search-field__input"
                inputValue={inputValue}
                handleChangeInput={(value: string) => handeChangeInput(value, 'searchValue')}
                type="text"
                label=""
                placeholder="Search"
            />
            <Button onClick={search} size="lg">Search</Button>
            <Button onClick={() => getList(true)} size="lg">Get in alphabet order</Button>
            <Button onClick={() => getList(false)} size="lg">Reset</Button>
        </div>
    );
};

export const SearchField = React.memo(SearchFieldComponent);

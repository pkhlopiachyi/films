import * as React from 'react';
import { Button } from 'react-bootstrap';
import { CustomDropdown, Input } from '../';
import { filmFormatTypes } from '../../constants';


interface AddFilmFormProps {
    title: string;
    release_year: string;
    stars: string;
    format: string;
    image_link: string;
    handleChangeInput: (value: string, key: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

type Props = AddFilmFormProps;

export class AddEmainModal extends React.Component<Props> {
    public render() {
        const {
            title,
            release_year,
            stars,
            image_link,
            handleChangeInput,
            onCancel,
            onSubmit,
        } = this.props;

        return (
            <div className="add-new-film" onClick={onCancel}>
                <div className="add-new-film__form">
                    <div className="add-new-film__form__header">Add New movie</div>
                    <div className="add-new-film__form__body">
                        <Input
                            inputValue={title}
                            handleChangeInput={value => handleChangeInput(value, 'title')}
                            type="text"
                            label="Title"
                            placeholder="Title"
                        />
                        <Input
                            inputValue={release_year}
                            handleChangeInput={value => handleChangeInput(value, 'release_year')}
                            type="number"
                            label="Release year"
                            placeholder="Release year"
                        />
                        <CustomDropdown
                            list={filmFormatTypes}
                            placeholder="Select movie format"
                            onSelect={this.onChangeDropdown}
                        />
                        <Input
                            inputValue={stars}
                            handleChangeInput={value => handleChangeInput(value, 'stars')}
                            type="text"
                            label="Stars"
                            placeholder="Stars"
                        />
                        <Input
                            inputValue={image_link}
                            handleChangeInput={value => handleChangeInput(value, 'image_link')}
                            type="text"
                            label="Image link (optional)"
                            placeholder="Image link"
                        />
                    </div>
                    <div className="add-new-film__form__footer">
                        <Button
                            size="lg"
                            onClick={onCancel}
                            variant="danger"
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            size="lg"
                            onClick={onSubmit}
                            variant="success"
                            type="button"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    private onChangeDropdown = (elem: string) => {
        this.props.handleChangeInput(elem, 'format');
    };
}

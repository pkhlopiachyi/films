import classnames from 'classnames';
import * as React from 'react';
import { Dropdown } from 'react-bootstrap';

export interface DropdownComponentProps {
    list: string[];
    onSelect?: (index: string) => void;
    className?: string;
    placeholder?: string;
    disableContentEditable?: boolean;
}

interface DropdownComponentState {
    selected: string;
    selectedIndex: string;
}

export class CustomDropdown extends React.Component<DropdownComponentProps & {}, DropdownComponentState> {
    constructor(props: DropdownComponentProps) {
        super(props);
        const selectedValue = this.props.placeholder || this.props.list[0];

        this.state = {
            selected: selectedValue,
            selectedIndex: '0',
        };
    }

    public componentWillReceiveProps(next: DropdownComponentProps) {
        const { placeholder } = this.props;

        if (next.placeholder !== placeholder) {
            this.setState({ selected: next.placeholder || this.props.list[0] });
        }
    }

    public render() {
        const { selected } = this.state;
        const { list } = this.props;
        const cx = classnames('cr-dropdown', this.props.className);

        return (
            <div className={cx}>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {selected}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {list.map((elem, index) => this.renderElem(elem, index))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }

    private renderElem = (elem: string, index: number) => {
        return  (
            <Dropdown.Item
                key={index}
                onSelect={ (eventKey: any, e?: React.SyntheticEvent<unknown>) => this.handleSelect(elem, index)}
            >
                {elem}
            </Dropdown.Item>
        );
    };

    private handleSelect = (elem: string, index: number) => {
        this.props.onSelect && this.props.onSelect(elem);

        this.setState({
            selected: elem,
            selectedIndex: index.toString(),
        });
    };
}

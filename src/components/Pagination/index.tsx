import * as React from 'react';
import { Pagination } from 'react-bootstrap';
import { paginationMaxLenght, paginationOuterElems } from '../../constants';


interface PaginationProps {
    firstElemIndex: number;
    lastElemIndex: number;
    total: number;
    handleChangePage: (page: number) => void;
    currentPageIndex: number;
    pageCount: number;
}


class CustomPagination extends React.Component<PaginationProps> {
    public render() {
        const { currentPageIndex } = this.props;
        const maxPageIndex = this.props.pageCount;

        return(
            <div>
                <Pagination>
                    <Pagination.Prev disabled={currentPageIndex === 0} onClick={this.handleChangePage(currentPageIndex - 1)}/>
                    {maxPageIndex <= paginationMaxLenght ?
                         this.renderPaginationForFiveAndLess(maxPageIndex)
                    : currentPageIndex + 1 <= paginationOuterElems ?
                        this.renderPaginationMoreFiveFirstElements(maxPageIndex)
                    : currentPageIndex + 1 > maxPageIndex - paginationOuterElems ?
                        this.renderPaginationMoreFiveLastElements(maxPageIndex)
                    : this.renderPagiantion(maxPageIndex)}
                    <Pagination.Next disabled={this.props.currentPageIndex + 1 === maxPageIndex} onClick={this.handleChangePage(currentPageIndex + 1)}/>
                </Pagination>
            </div>
        );
    }

    private renderPaginationForFiveAndLess = (maxPageIndex: number) => {
        // tslint:disable-next-line:prefer-const
        let items : JSX.Element[] = [];

        for (let i = 1; i <= maxPageIndex; i++) {
            items.push(
                this.renderPaginationItem(i === this.props.currentPageIndex + 1, i),
            );
        }

        return items;
    };

    private renderPagiantion = (maxPageIndex: number) => {
        // tslint:disable-next-line:prefer-const
        let items : JSX.Element[] = [];

        items.push(
            this.renderPaginationItem(false, 1),
            this.renderPaginationElipsis(),
            this.renderPaginationItem(true,this.props.currentPageIndex + 1),
            this.renderPaginationElipsis(),
            this.renderPaginationItem(false, maxPageIndex),
        );

        return items;
    };

    private renderPaginationMoreFiveFirstElements = (maxPageIndex: number) => {
        // tslint:disable-next-line:prefer-const
        let items : JSX.Element[] = [];

        for (let i = 1; i <= paginationOuterElems; i++) {
            items.push(
                this.renderPaginationItem(i === this.props.currentPageIndex + 1, i),
            );
        }

        items.push(
            this.renderPaginationElipsis(),
            this.renderPaginationItem(false, maxPageIndex),
        );

        return items;
    };

    private renderPaginationMoreFiveLastElements = (maxPageIndex: number) => {
        // tslint:disable-next-line:prefer-const
        let items : JSX.Element[] = [];

        items.push(
            this.renderPaginationItem(false, 1),
            this.renderPaginationElipsis(),
        );

        for (let i = maxPageIndex - 2; i <= maxPageIndex; i++) {
            items.push(
                this.renderPaginationItem(i === this.props.currentPageIndex + 1, i),
            );
        }

        return items;
    };


    private renderPaginationItem = (active: boolean, index: number) => {
        return(
            <Pagination.Item active={active} onClick={this.handleChangePage(index - 1)}>{index}</Pagination.Item>
        );
    };

    private renderPaginationElipsis = () => {
        return(
            <Pagination.Ellipsis />
        );
    };

    private handleChangePage = (pageIndex: number) => () => {
        this.props.handleChangePage(pageIndex);
    };
}

export { CustomPagination };

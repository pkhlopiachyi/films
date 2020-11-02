import * as React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { compose } from 'redux';
import { DeleteFilmModal, FilmCarousel, FilmDetailsModal, SearchField, UploadFile } from '../../components';
import { AddEmainModal } from '../../components/AddFilmForm';
import {
    addFilm,
    CommonError,
    deleteFilm,
    fetchFilmList,
    fetchUploadFilmsList,
    FilmInterface,
    RootState,
    searchFilm,
    selectAddFilmSuccess,
    selectDeleteFilmSuccess,
    selectFilmsList,
    selectFilmsListError,
    selectFilmsListLoading,
} from '../../modules';

interface ReduxProps {
    films: FilmInterface[];
    loading: boolean;
    error?: CommonError;
    addFilmSuccess: boolean;
    deleteFilmSuccess: boolean;
}

interface DispatchProps {
    addFilm: typeof addFilm;
    deleteFilm: typeof deleteFilm;
    fetchFilmList: typeof fetchFilmList;
    searchFilm: typeof searchFilm;
    upload: typeof fetchUploadFilmsList;
}

type Props = ReduxProps & DispatchProps;

interface State {
    selectedFilm?: FilmInterface;
    showDetailsModal: boolean;
    showDeleteFilmModal: boolean;
    showAddFilmModal: boolean;
    title: string;
    release_year: string;
    format: string;
    stars: string;
    image_link: string;
    searchValue: string;
    file: File[];
}

class FilmScreenComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            selectedFilm: undefined,
            showDetailsModal: false,
            showDeleteFilmModal: false,
            showAddFilmModal: false,
            title: '',
            release_year: '',
            format: '',
            stars: '',
            image_link: '',
            searchValue: '',
            file: [],
        };
    }
    public componentDidMount() {
        this.handleFetchFilms(false);
    }

    public componentDidUpdate(prevProps: Props) {
        if (!prevProps.deleteFilmSuccess && this.props.deleteFilmSuccess) {
            this.setState({ showDeleteFilmModal: false });
        }

        if (!prevProps.addFilmSuccess && this.props.addFilmSuccess) {
            this.setState({ showAddFilmModal: false });
        }
    }

    public render() {
        const {
            showAddFilmModal,
            showDeleteFilmModal,
            showDetailsModal,
            selectedFilm,
            title,
            release_year,
            format,
            stars,
            image_link,
            searchValue,
        } = this.state;

        return (
            <div className="film-screen">
                <div className="film-screen__content">
                    <div className="film-screen__content__add">
                        <span className="film-screen__content__add__label" onClick={this.toggleAddFilmModal}>Add new film</span>
                        <SearchField
                            inputValue={searchValue}
                            handeChangeInput={this.handleChangeInput}
                            search={this.handleSearch}
                            getList={this.handleFetchFilms}
                        />
                        <UploadFile handleUploadFile={this.handleUploadFile} upload={this.uploadFile}/>
                    </div>
                    <FilmCarousel
                        list={this.props.films}
                        onSelectFilm={this.onClickFilm}
                        handleDeleteClick={this.showDeleteFilmModal}
                    />
                </div>
                {showDetailsModal && <FilmDetailsModal onClose={this.onCloseFilmDetails} film={selectedFilm} />}
                {showDeleteFilmModal && <DeleteFilmModal
                                            film_id={(selectedFilm && selectedFilm._id) || ''}
                                            onClose={this.onCloseFilmDelete}
                                            handleDelete={this.handleDeleteFilm}
                                        />
                }
                {showAddFilmModal && <AddEmainModal
                                        title={title}
                                        release_year={release_year}
                                        format={format}
                                        stars={stars}
                                        image_link={image_link}
                                        handleChangeInput={this.handleChangeInput}
                                        onCancel={this.toggleAddFilmModal}
                                        onSubmit={this.handleAddFilm}
                                     />
                }
            </div>
        );
    }

    private onClickFilm = (film: FilmInterface) => {
        this.setState({
            selectedFilm: film,
            showDetailsModal: true,
        });
    };

    private onCloseFilmDetails = () => {
        this.setState({
            showDetailsModal: !this.state.showDetailsModal,
        });
    };

    private onCloseFilmDelete = () => {
        this.setState({
            showDeleteFilmModal: !this.state.showDeleteFilmModal,
        });
    };

    private showDeleteFilmModal = (film: FilmInterface) => {
        this.setState({
            selectedFilm: film,
            showDeleteFilmModal: true,
        });
    };

    private handleDeleteFilm = (_id: string) => {
        this.props.deleteFilm({ _id });
    };

    private toggleAddFilmModal = () => {
        this.setState({ showAddFilmModal: !this.state.showAddFilmModal });
    };

    private handleAddFilm = () => {
        const { title, release_year, format, stars, image_link } = this.state;
        this.props.addFilm({ title, release_year: +release_year, format, stars, image_link});

        this.setState({
            title: '',
            release_year: '',
            format: '',
            stars: '',
            image_link: '',
        });
    };

    private handleChangeInput = (value: string, key: string) => {
        //@ts-ignore
        this.setState({
            [key]: value,
        });
    };

    private handleSearch = () => {
        this.props.searchFilm({ value: this.state.searchValue });
    };

    private handleFetchFilms = (isAlphabet: boolean) => {
        this.props.fetchFilmList({ isAlphabet });
    };

    // tslint:disable:no-any
    private handleUploadFile = (e: any) => {

        this.setState(({ file: e.target.files }));
    };

    private uploadFile = () => {
        const request = new FormData();

        request.append('films_file', this.state.file[0]);

        this.props.upload(request);
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = state => ({
    films: selectFilmsList(state),
    loading: selectFilmsListLoading(state),
    error: selectFilmsListError(state),
    addFilmSuccess: selectAddFilmSuccess(state),
    deleteFilmSuccess: selectDeleteFilmSuccess(state),
});

const mapDispatchProps: MapDispatchToPropsFunction<DispatchProps, {}> = dispatch => ({
    addFilm: payload => dispatch(addFilm(payload)),
    deleteFilm: payload => dispatch(deleteFilm(payload)),
    fetchFilmList: paylaod => dispatch(fetchFilmList(paylaod)),
    searchFilm: payload => dispatch(searchFilm(payload)),
    upload: payload => dispatch(fetchUploadFilmsList(payload)),
});

export const FilmScreen = compose(connect(mapStateToProps, mapDispatchProps))(FilmScreenComponent) as React.ComponentType;

import * as React from 'react';
import { defaultImageUrl } from '../../constants';
import { FilmInterface } from '../../modules';
import { CloseIcon } from '../CloseIcon';

interface FilmCarouselProps {
    list: FilmInterface[];
    onSelectFilm: (film: FilmInterface) => void;
    handleDeleteClick: (film: FilmInterface) => void;
}

const FilmCarouselComponent: React.FC<FilmCarouselProps> = ({ list, onSelectFilm, handleDeleteClick }) => {
    const renderItem = (film: FilmInterface, index: number) => (
        <div key={`film-${index}`} className="film-carousel__item">
            <div className="film-carousel__item__delete">
                <CloseIcon onClick={() => handleDeleteClick(film)}/>
            </div>
            <div className="film-carousel__item__image" onClick={() => onSelectFilm(film)}>
                <img src={film.image_link || defaultImageUrl} alt="film-img"  />
            </div>
            <div className="film-carousel__item__title">{film.title}</div>
        </div>
    );

    const renderNoData = () => (
        <div className="film-carousel__empty">
            No data
        </div>
    )

    return (
        <div className={`film-carousel ${list.length ? '' : 'no-data'}`}>
            {list.length ? list.map(renderItem) : renderNoData()}
        </div>
    );
};

export const FilmCarousel = React.memo(FilmCarouselComponent);

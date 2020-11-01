import * as React from 'react';
import { defaultImageUrl } from '../../constants';
import { FilmInterface } from '../../modules';
import { CloseIcon } from '../CloseIcon';


interface ShowFilmDetailsModal {
    film?: FilmInterface;
    onClose: () => void;
}

const ShowFilmDetailModal: React.FC<ShowFilmDetailsModal> = ({ film, onClose }) => {
    return (
        <div className="film-details" onClick={onClose}>
            <div className="film-details__modal">
                <div className="film-details__modal__close">
                    <CloseIcon onClick={onClose}/>
                </div>
                <div className="film-details__modal__left">
                    <img src={film!.image_link || defaultImageUrl} alt="film-img" />
                </div>
                <div className="film-details__modal__right">
                    <span className="film-details__modal__right__label">Title:</span>
                    <span className="film-details__modal__right__value">{film!.title}</span>

                    <span className="film-details__modal__right__label">Release year:</span>
                    <span className="film-details__modal__right__value">{film!.release_year}</span>

                    <span className="film-details__modal__right__label">Format:</span>
                    <span className="film-details__modal__right__value">{film!.format}</span>

                    <span className="film-details__modal__right__label">Stars:</span>
                    <span className="film-details__modal__right__value">{film!.stars}</span>
                </div>
            </div>
        </div>
    );
};

export const FilmDetailsModal = React.memo(ShowFilmDetailModal);

import React from 'react';
import { Button } from 'react-bootstrap';

interface DeleteFilmModalProps {
    film_id: string;
    onClose: () => void;
    handleDelete: (id: string) => void;
}


const DeleteFilmModalComponent: React.FC<DeleteFilmModalProps> = ({film_id, onClose, handleDelete}) => {
    return (
        <div className="film-delete">
            <div className="film-delete__modal">
                <div className="film-delete__modal__header">Are you sure you want to delete this movie?</div>
                <div className="film-delete__modal__footer">
                    <Button
                        size="lg"
                        onClick={onClose}
                        variant="danger"
                        type="button"
                    >
                        Cancel
                    </Button>
                    <Button
                        size="lg"
                        onClick={() => handleDelete(film_id)}
                        variant="success"
                        type="button"
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const DeleteFilmModal = React.memo(DeleteFilmModalComponent);

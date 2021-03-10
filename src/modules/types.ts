export interface CommonError {
    code: number;
    message: string[];
}

export interface FilmInterface {
    _id: string;
    title: string;
    release_year: number;
    format: string;
    stars: string;
    image_link: string;
}

export interface UserInterface {
    _id: number;
    email: string;
    username: string;
    favorite: FilmInterface[];
    birthday: number;
    gender: 'male' | 'female';
}
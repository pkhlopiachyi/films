export interface CommonError {
    code: number;
    message: string[];
}

export interface FilmInterface {
    _id: string;
    title: string;
    release_year: number;
    format: 'VHS' | 'DVD' | 'Blue-Ray';
    stars: string;
    image_link: string;
}

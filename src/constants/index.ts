import { MenuInterface } from '../modules';

export const defaultImageUrl = 'https://previews.123rf.com/images/fabiopagani/fabiopagani1505/fabiopagani150500015/39589889-movie-cinema-reels-on-35-mm-unrolled-film-vertical-on-neutral-background.jpg';

export const filmFormatTypes = ['DVD', 'Blue-ray', 'VHS'];

export const paginationMaxLenght = 5;
export const paginationOuterElems = 3;

export const pageLength = 8;

export const genders = [ 'male', 'female' ];

export const loggedInRoutes: MenuInterface[] = [
    { path: '/profile', label: 'Profile'},
    { path: '/films', label: 'Films' },
];

export const loggedOutRoutes: MenuInterface[] = [
    { path: '/login', label: 'Login' },
    { path: 'register', label: 'Register' },
    { path: '/films', label: 'Films'},
];

import * as React from 'react';
import { FilmScreen } from './screens';

class AppLayout extends React.Component {
    public render() {
        return (
            <FilmScreen />
        );
    }
}

export const App = AppLayout;
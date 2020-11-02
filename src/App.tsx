import * as React from 'react';
import { Alerts } from './containers';
import { FilmScreen } from './screens';

class AppLayout extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <FilmScreen />
                <Alerts />
            </React.Fragment>
        );
    }
}

export const App = AppLayout;

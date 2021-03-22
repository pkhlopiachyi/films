import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Router } from 'react-router';
import { Menu } from './components';
import { Alerts } from './containers';
import { Layout } from './routes';

const history = createBrowserHistory();

class AppLayout extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Menu />
                    <Layout />
                </Router>
                <Alerts />
            </React.Fragment>
        );
    }
}

export const App = AppLayout;

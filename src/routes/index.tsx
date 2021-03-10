import React from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { FilmScreen } from '../screens';


const renderLoader = () => (
    <div className="pg-loader-container">
        <Spinner animation="border" variant="primary" />
    </div>
);

const PublicRoute: React.FunctionComponent<any> = ({ component: CustomComponent, loading, isLogged, ...rest }) => {
    if (loading) {
        return renderLoader();
    }

    if (isLogged && rest.path !== '/setup') {
        return <Route {...rest}><Redirect to={'/films'} /></Route>;
    }

    const renderCustomerComponent = (props: JSX.IntrinsicAttributes) => <CustomComponent {...props} />;

    return <Route {...rest} render={renderCustomerComponent} />;
};

const PrivateRoute: React.FunctionComponent<any> = ({ component: CustomComponent, loading, isLogged, ...rest }) => {
    if (loading) {
        return renderLoader();
    }
    const renderCustomerComponent = (props: JSX.IntrinsicAttributes) => <CustomComponent {...props} />;

    if (isLogged) {
        return <Route {...rest} render={renderCustomerComponent} />;
    }

    return (
        <Route {...rest}>
            <Redirect to={'/login'} />
        </Route>
    );
};

class LayoutComponent extends React.Component {
    public render() {
        return (
            <div>
                <Switch>
                    <PublicRoute path="/login" />
                    <PublicRoute path="/register" />
                    <PrivateRoute path="/profile" />
                    <Route path="/films" component={FilmScreen} />
                </Switch>
            </div>
        );
    }
}

export const Layout = compose(
    withRouter,
    connect(),
)(LayoutComponent);

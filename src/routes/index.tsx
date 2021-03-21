import React from 'react';
import { Spinner } from 'react-bootstrap';
import { connect, MapStateToProps } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { RootState, UserInterface } from '../modules';
import { selectUserData } from '../modules/public/login/selectors';
import { FilmScreen, LoginScreen , RegisterScreen } from '../screens';


const renderLoader = () => (
    <div className="pg-loader-container">
        <Spinner animation="border" variant="primary" />
    </div>
);

const PublicRoute: React.FunctionComponent<any> = ({ component: CustomComponent, loading, userData, ...rest }) => {
    if (loading) {
        return renderLoader();
    }

    window.console.log(userData);

    if (userData) {
        return <Route {...rest}><Redirect to={'/films'} /></Route>;
    }

    const renderCustomerComponent = (props: JSX.IntrinsicAttributes) => <CustomComponent {...props} />;

    return <Route {...rest} render={renderCustomerComponent} />;
};

const PrivateRoute: React.FunctionComponent<any> = ({ component: CustomComponent, loading, userData, ...rest }) => {
    if (loading) {
        return renderLoader();
    }
    const renderCustomerComponent = (props: JSX.IntrinsicAttributes) => <CustomComponent {...props} />;

    if (!userData) {
        return <Route {...rest} render={renderCustomerComponent} />;
    }

    return (
        <Route {...rest}>
            <Redirect to={'/login'} />
        </Route>
    );
};

interface ReduxProps {
    userData?: UserInterface;
}

type Props = ReduxProps;

class LayoutComponent extends React.Component<Props> {
    public render() {
        const { userData } = this.props;

        return (
            <div className="layout">
                <Switch>
                    <PublicRoute path="/login" userData={userData}  component={LoginScreen} />
                    <PublicRoute path="/register" userData={userData} component={RegisterScreen} />
                    <PrivateRoute path="/profile" userData={userData} />
                    <Route path="/films" component={FilmScreen} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = state => ({
    userData: selectUserData(state),
});

export const Layout = compose(
    withRouter,
    connect(mapStateToProps),
)(LayoutComponent) as React.ComponentClass;

import * as React from 'react';
import { Alert } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import {
    alertDelete,
    alertDeleteByIndex,
    AlertState,
    RootState,
    selectAlertState,
} from '../../modules';

interface ReduxProps {
    alerts: AlertState;
}

interface DispatchProps {
    alertDelete: typeof alertDelete;
    alertDeleteByIndex: typeof alertDeleteByIndex;
}

type Props = ReduxProps & DispatchProps;

type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | undefined;

class AlertComponent extends React.Component<Props> {
    public deleteAlertByIndex = (key: number) => {
        this.props.alertDeleteByIndex(key);
    };

    public render() {
        return (
            <div className="pg-alerts">
                {this.props.alerts.alerts.map(w => w.message.map((msg, index) => (
                    <FadeIn key={index}>
                        <div onClick={() => this.deleteAlertByIndex(index)}>
                            <Alert
                                variant={w.type === 'error' ? 'danger' as AlertType : w.type as AlertType}
                            >
                                {msg}
                                {w.code && ` ${w.code.toString(10)}`}
                            </Alert>
                        </div>
                    </FadeIn>
                )))}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    alerts: selectAlertState(state),
});

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        alertDelete: () => dispatch(alertDelete()),
        alertDeleteByIndex: payload => dispatch(alertDeleteByIndex(payload)),
    });

export const Alerts = connect(mapStateToProps, mapDispatchToProps)(AlertComponent);

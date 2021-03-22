import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loggedInRoutes, loggedOutRoutes } from '../../constants';
import { logout, MenuInterface, selectUserData } from '../../modules';

export const Menu = () => {
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData);

    const handleLogout = () => {
        dispatch(logout());
    };

    const renderItem = (item: MenuInterface) =>  (
        <Link to={item.path} key={item.label} className="menuBar__item">
            {item.label}
        </Link>
    );

    return (
        <div className="menuBar">
            <div className="menuBar__links">
                {(userData ? loggedInRoutes : loggedOutRoutes).map(renderItem)}
            </div>
            {userData &&
                <div className="menuBar__item" onClick={handleLogout}>
                    Logout
                </div>
            }
        </div>
    );
};

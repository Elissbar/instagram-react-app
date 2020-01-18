import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
    const logged_out_nav = (
        <ul className="ul-auth">
            <li onClick={() => props.display_form('login')}>Войти</li>
            <li onClick={() => props.display_form('signup')}>Зарегистрироваться</li>
        </ul>
    );

    const logged_in_nav = (
        <ul className="ul-auth">
            <li onClick={props.handle_logout}>Выйти</li>
        </ul>
    );
    return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handle_logout: PropTypes.func.isRequired
};
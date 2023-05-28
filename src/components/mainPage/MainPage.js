import React from 'react';
import './MainPage.css';
import Login from '../login/Login';
import Header from '../header/header';
import { FormattedMessage } from 'react-intl';

function MainPage() {
    return (
        <div>
            <Header />
            <h3 className='inicioSesion'>
                <FormattedMessage id="Inicio de sesion" />
            </h3>
            <div className='signin'>
                <div className='loginSpace'>
                    <Login />
                </div>
            </div>
            <h3 className='footertext'>
                Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
            </h3>
        </div>
    );
}

export default MainPage;
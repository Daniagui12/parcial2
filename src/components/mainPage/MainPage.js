import React from 'react';
import './MainPage.css';
import Login from '../login/Login';
import Header from '../header/header';
import { FormattedMessage } from 'react-intl';
import Footer from '../footer/Footer';

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
            <Footer />
        </div>
    );
}

export default MainPage;
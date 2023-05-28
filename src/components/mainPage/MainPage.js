import React from 'react';
import './MainPage.css';
import Login from '../login/Login';
import Header from '../header/header';

function MainPage() {
    return (
        <div>
            <Header />
            <h3 className='inicioSesion'>Inicio de sesión</h3>
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
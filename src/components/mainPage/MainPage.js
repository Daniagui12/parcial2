import React from 'react';
import './MainPage.css';
import Login from '../login/Login';
import { Nav, Navbar } from 'react-bootstrap';
import Header from '../header/header';

function MainPage() {
    return (
        <div>
            <Header />
            <div className='signin'>
                <div className='loginSpace'>
                    <Login />
                </div>
            </div>

            {/* Contact us in the footer */}
            <h3 className='footertext'>
                Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
            </h3>
        </div>
    );
}

export default MainPage;
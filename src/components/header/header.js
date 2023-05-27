import React from 'react';
import Login from '../login/Login';
import { Nav, Navbar } from 'react-bootstrap';
import './header.css';

function Header() {
    return (
        <div>
            <Navbar bg="light" variant="light" className="navbar">
                <Navbar.Brand href="/" className='MainH1'>El Aroma Magico</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
            </Navbar>
            <div className='MainImage'>
                <img src='https://cdn.discordapp.com/attachments/1020924268478996560/1111645060442902608/image.png' alt='MainImage' className='MainImage' />
            </div>
        </div>
    );
}

export default Header;
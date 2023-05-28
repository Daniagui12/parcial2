import React from 'react';
import './Footer.css';
import { FormattedMessage } from 'react-intl';

function Footer() {
    return (
        <h3 className='footertext'>
            <FormattedMessage id="Footer" />
        </h3>
    );
}

export default Footer;
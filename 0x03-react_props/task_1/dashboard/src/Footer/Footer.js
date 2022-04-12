import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
    return (
        <div className="App-footer">
            Copyright {getFullYear()} - {getFooterCopy(true)}
        </div>
        );
    }
    
export default Footer;
import React from 'react';
import './Footer.css';

import { getFooterCopy, getFullYear } from '../utils/utils';
function Footer() {
  return (
      <div className='Footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
  );
}

export default Footer;

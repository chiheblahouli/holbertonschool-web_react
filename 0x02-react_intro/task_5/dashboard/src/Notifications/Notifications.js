import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = function () {
    return (
        <div className='Notifications' style={{display: 'flex-box', position: 'absolute', width: '90%', height: '20%', marginBottom:"50px", right:"5%", top:"10px"}}>
            <p>Here is the list of notifications</p>

            <button aria-label='Close' style={{display: 'inline-block', position: 'absolute', top: '10px', right: '10px', border: '0'}} onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} alt=""  width="20" height="20" />
            </button>

            <div style={{paddingRight:"60px"}}>
                <ul style={{display: 'inline-block', position: 'absolute', top: '30%', left: '30px'}}>
                    <li data-priority='default' style={{"color":"blue"}}>New course available</li>
                    <li data-priority='urgent' style={{"color":"red"}}>New resume available</li>
                    <li data-priority='urgent' style={{"color":"red"}}>
                        <div dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}></div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Notifications;

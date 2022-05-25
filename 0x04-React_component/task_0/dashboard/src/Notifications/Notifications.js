import React from 'react';
import Notificationitems from './NotificationItem';
import './Notifications.css';
import closeicon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


function Notifications({displayDrawer, listNotifications}){
    let displayValue = 'none'
    if (displayDrawer){
        displayValue = 'block'
    }
    return(
        <div className='notificationsElement'>
        <div className='menuItem'>Your notifications</div>
        <div className='Notifications' style={{display:displayValue}} >
            <button onClick={(e) => console.log('Close button has been clicked')}  aria-label="Close" style={{display: 'inline'}}><img height='16px' width="16px" alt='close' src={closeicon}></img></button>
            <p>Here is the list of notifications</p>
			    <ul>
                {listNotifications.length === 0 ? (<Notificationitems value="No new notification for now" type='default'/>):(listNotifications.map((item => <Notificationitems key={item.id} type={item.type} html={item.html} value={item.value} />)))}				
			    </ul>
        </div>
        </div>
    );
}

Notifications.defaultProps = {
    displayDrawer : false,
    listNotifications: []

};

Notifications.propTypes = {
    displayDrawer : PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};


export default Notifications;

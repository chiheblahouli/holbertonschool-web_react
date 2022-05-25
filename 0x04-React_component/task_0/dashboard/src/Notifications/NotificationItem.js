import React from 'react';
import PropTypes from 'prop-types';

function Notificationitems(props){
    if(props.html)
    {
        return(<li dangerouslySetInnerHTML={props.html} data-notification-type={props.type}></li>)
    }
    return (<li data-notification-type={props.type}>{props.value}</li>)
    
}


Notificationitems.defaultProps = {
    type : 'default',
};

Notificationitems.PropTypes = {
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
    type : PropTypes.string.isRequired,
    html : PropTypes.elementType
};

export default Notificationitems;
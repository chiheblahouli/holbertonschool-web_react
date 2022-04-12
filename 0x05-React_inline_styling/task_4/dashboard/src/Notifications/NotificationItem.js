import React from 'react';
import PropTypes from 'prop-types'


 const NotificationItemUnmemo = ({ type, value, html, markAsRead, id, className }) => {
    if (html) {
        return (
            <li
            className = {className}
            onClick={()=>markAsRead(id)}
            dangerouslySetInnerHTML={html}>
            </li>
        )
    }
    return (
        <li
        className = {className}

        onClick={()=>markAsRead(id)}
       >
            {value}
        </li>
    )
}


NotificationItemUnmemo.prototype = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    markAsRead:PropTypes.func.isRequired
}
NotificationItemUnmemo.defaultProps = {
    markAsRead: function(){},
}
const NotificationItem = React.memo(NotificationItemUnmemo)


export {NotificationItem};
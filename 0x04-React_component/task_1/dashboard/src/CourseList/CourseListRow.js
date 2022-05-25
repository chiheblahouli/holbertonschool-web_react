import React, { Component } from 'react';
import propTypes from 'prop-types';

function CourseListRow({isHeader, textFirstCell , textSecondCell}){
    if (!(isHeader)){
        return(<tr className='CourseListRow'><td>{textFirstCell}</td><td>{textSecondCell}</td></tr>)
    }
    
    if (textSecondCell){
        return(<tr className='CourseListRow'><th>{textFirstCell}</th><th>{textSecondCell}</th></tr>)
    }
        
    

    return(<tr className='CourseListRow'><th colSpan='2'>{textFirstCell}</th></tr>)

}

CourseListRow.defaultProps = {
    isHeader : false,
    textSecondCell : null
};

CourseListRow.propTypes = {
    isHeader : propTypes.bool,
    textFirstCell : propTypes.string.isRequired,
    textSecondCell : propTypes.oneOfType([
        propTypes.string, propTypes.number
    ])
};


export default CourseListRow;
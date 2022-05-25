import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'
import CourseShape from './CourseShape';
import PropTypes from 'prop-types'

function CourseList({ listCourses }){

        if (listCourses.length === 0){
            return(<div>No course available yet</div>)
        }
        return(
        <table id='CourseList'>
            <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses"></CourseListRow>
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}></CourseListRow>
            </thead>
            <tbody>
            {listCourses.map((course) => <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit}></CourseListRow>)}
            </tbody>
            </table>)
    }

    CourseList.defaultProps = {
        listCourses: []
    };

    CourseList.propTypes = {
        listCourses: PropTypes.arrayOf(CourseShape)
    };

export default CourseList;
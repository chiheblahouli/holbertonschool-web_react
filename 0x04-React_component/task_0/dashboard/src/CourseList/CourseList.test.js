import CourseList from "./CourseList";
import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import CourseListRow from "./CourseListRow"


describe('<CourseList />', () => {

    it('renders <CourseList />', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('#CourseList').exists()).toBeTruthy()
    });
    
    it('Tests that Courselist has 2 childs tbody and thead', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('#CourseList').children()).toHaveLength(2)      
    })

    // it('Tests that tbody has 3 childs', () => {
    //     const wrapper = shallow(<CourseList />);
    //     expect(wrapper.find('#CourseList tbody').children()).toHaveLength(3)      
    // })

    // it('Tests that thead has 2 childs', () => {
    //     const wrapper = shallow(<CourseList />);
    //     expect(wrapper.find('#CourseList thead').children()).toHaveLength(2)      
    // })

    it('Tests that course list row has 5', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
        })


});
import CourseListRow from "./CourseListRow";
import {shallow} from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'




describe('<CourseListRow />', () => {

    it('renders <CourseListRow /> with  child th item', () => {
        const wrapper = shallow(<CourseListRow textFirstCell={'requiredText'} isHeader={true}/>);
        expect(wrapper.find('th').children()).toHaveLength(1)
    });

    it('Checks if the th element has colspan=2 attr', () => {
        const wrapper = shallow(<CourseListRow textFirstCell={'requiredText'} isHeader={true}/>);
        const element = wrapper.find('th')
        const attru = element.getElement().props.colSpan;
        expect(attru).toBe('2')

    });
    
    it('Tests when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow textFirstCell={'requiredText'} isHeader={true} textSecondCell={'not_required_but_here_i_am'}/>);
        expect(wrapper.find('th').children()).toHaveLength(2)      
    })

    
    it('Tests when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow textFirstCell={'requiredText'} isHeader={false} textSecondCell={'not_required_but_here_i_am'}/>);
        expect(wrapper.find('tr td').children()).toHaveLength(2)      
    })

});
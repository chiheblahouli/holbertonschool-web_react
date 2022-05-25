import Login from "./Login";
import {shallow} from 'enzyme';
import React from 'react';


describe('<Login />', () => {
    const wrapper = shallow(<Login />);

    it('renders Login without crashing', () =>{
        expect(wrapper.find('.Login').exists()).toBeTruthy();
    });

    it('renders an app logo', () =>{
        expect(wrapper.find('input').length).toEqual(2);
    });
    it('renders an app logo', () =>{
        expect(wrapper.find('label').length).toEqual(2);
    });


});
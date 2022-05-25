import Header from "./Header";
import {shallow} from 'enzyme';
import React from 'react';


describe('<Header />', () => {
    const wrapper = shallow(<Header />);
    it('renders a div with className Header without crashing', () =>{
        expect(wrapper.find('.Header').exists()).toBeTruthy()
    });

    it('renders an app logo', () =>{
        expect(wrapper.find('.Header-logo').exists()).toBeTruthy()
    });

    it('renders a heading tag', () =>{
        expect(wrapper.find('h1').exists()).toBeTruthy()
    });
});
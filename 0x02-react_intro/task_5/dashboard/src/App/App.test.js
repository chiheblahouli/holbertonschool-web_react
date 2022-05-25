import React from 'react';
import { shallow } from 'enzyme';

import App from './App.js';

describe('<App />', () => {

    it('App renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toHaveLength(1);
    });
   
    it('App renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('header.App-header')).toHaveLength(1);
    });

    it('App renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('body.App-body')).toHaveLength(1);
    });

    it('App renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('footer.App-footer')).toHaveLength(1);
    });

  });
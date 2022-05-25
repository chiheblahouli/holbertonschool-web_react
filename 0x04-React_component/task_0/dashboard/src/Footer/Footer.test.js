import Footer from "./Footer";
import {shallow} from 'enzyme';
import React from 'react';


describe('<Footer />', () => {
    const wrapper = shallow(<Footer />);

    it('renders Footer without crashing', () =>{
        expect(wrapper.find('.Footer').exists()).toBeTruthy();
    });

    it('Checks if the last paragraph exists with the text Copyright', ()=>{
        expect(wrapper.find('.Footer').last().text()).toContain('Copyright')
    });

});

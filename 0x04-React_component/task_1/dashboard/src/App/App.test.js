import {shallow} from 'enzyme';
import App from './App';
import React from 'react';
import CourseList from '../CourseList/CourseList'

describe('<App />', () => {
    const wrapper = shallow(<App />);
    it('renders <App /> components without crashing', () => {
      expect(wrapper.find('.App').exists()).toBeTruthy()
    });

    it('renders Notifications components without crashing', () => {
        expect(wrapper.find('Notifications').exists()).toBeTruthy()
      });

    it('renders a Header without crashing', () =>{
        expect(wrapper.find('Header').exists()).toBeTruthy()
    });

    it('renders Login without crashing', () =>{
        expect(wrapper.find('Login').exists()).toBeTruthy()
    });

    it('renders Footer without crashing', () =>{
        expect(wrapper.find('Footer').exists()).toBeTruthy();
    });

    it('CourseList  do  not exist when isloggedin true', () =>{
        const wrapper = shallow(<App isLoggedIn={false}/>);
        expect(wrapper.find(CourseList).exists()).toBeFalsy(); 
    
    });


    // verify that when the keys control and h are pressed the logOut function passed as props is called
    it('verify that when the keys control and h are pressed the logOut function passed as props is called', () =>{
        const wrapper = shallow(<App isLoggedIn={true} logOut={() => {}}/>);
        wrapper.find('App').simulate('keydown', {ctrlKey: true, key: 'h'});
        expect(wrapper.instance().props.logOut).toHaveBeenCalled(); 
    }
    );    
});
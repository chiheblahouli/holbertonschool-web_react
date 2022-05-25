import { shallow } from "enzyme";
import React from 'react';
import Notificationitems from "./NotificationItem";

describe('Notification item Component should render Li items without crashing', () => {
    let wrapper = shallow(<Notificationitems />)
    it('should render ',() => {
       expect(wrapper.find("li").exists()).toBeTruthy() 
    });

    
    it('should render ',() => {
        const wrapper = shallow(<Notificationitems value={'value-test'} type={'default-test'} />)
        expect(wrapper.find("li").text()).toMatch('value-test')
     });

    it('should render ',() => {
        const wrapper = shallow(<Notificationitems value={'value-test'} type={'default-test'} />)
        expect(wrapper.find("li").prop('data-notification-type')).toMatch('default-test')
        });
    
    
    it('should render ',() => {
        const wrapper = shallow(<Notificationitems html={'<u>value-test<u>'} type={'default-test'} />)
        expect(wrapper.find("li").prop('dangerouslySetInnerHTML')).toEqual({"__html": "<u>value-test<u>"})
    });
})

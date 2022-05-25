import {shallow} from 'enzyme';
import Notifications from './Notifications';
import React from 'react';

describe('<Notifications />', () => {

  it("Notifications renders correctly if you pass an empty array ", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('.Notifications ul').children().length).toBe(1);
  });

  it("Notifications renders correctly if you pass an empty array ", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications ul').children().length).toBe(1);
  });


});
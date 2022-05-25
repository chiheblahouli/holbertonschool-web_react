import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { PropTypes, } from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import './App.css';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

let listCourses = [{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}]
let listNotifications = [{id: 1, value: "New course available", type: 'default'}, {id: 2,  value:"New resume available", type:'urgent'}, {id: 3,html: {__html: getLatestNotification()}, type:'urgent'}]


class App extends React.Component {




  handleKeys(event){
    if (event.ctrlKey && (event.key === 'h')){
      event.preventDefault();
      alert('Logging you out')
      this.logOut()
    }
  }

  componentDidMount(){
    window.addEventListener('keydown', (event) => {
      this.handleKeys(event);
    });

    

  }



  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeys, false);
  };

 
 
  render(){
    return (
    <React.Fragment>
      <div className="App">
      <Notifications listNotifications={listNotifications}/>
      <Header />
      {this.props.isLoggedIn ? (<CourseList listCourses={listCourses} />):(<Login />)}
      <Footer />
      </div>
    </React.Fragment>
  );
}
}


App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.propTypes = {
  logOut: PropTypes.func,
}

export default App;

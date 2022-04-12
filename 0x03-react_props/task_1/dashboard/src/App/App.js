import React from 'react';
import './App.css';
import { Notifications } from '../Notifications/Notifications';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from '../Login/Login';


function App() {
  return (
    <div className="container">
          <Notifications />
          <Header />
          <Login />
          <Footer />
    </div>
  );
}

export default App;

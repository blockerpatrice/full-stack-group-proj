import React, { Component } from 'react';
import Login from '../login-page/Login.js';
// import Signup from '../login-page/Signup.js';
import './Home.css';

class Home extends Component {
   
    render() { 
        return ( 
            <div className="home">
                <div className="lander">
                    <Login />
                </div>
            </div>
        );
    }
}
 
export default Home;
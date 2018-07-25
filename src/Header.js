import React from 'react';
import  './css/Header.css';

const Header = () =>{
    return(
        <div>
        <div className="main_header">
           <h1>Management system</h1>
          <button>Login</button>

        </div>
        <div className="app-menu">
            <button className="bm-burger-button">OverView</button>
            <button className="bm-burger-button">Services</button>
            <button className="bm-burger-button">Book Ticket</button>
            <button className="bm-burger-button">Profile</button>
            <button className="bm-burger-button">Logout</button>
            </div>
        </div>
        
    )
    ;
}

export default Header;
import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.css';
import './css/Login.css';

class Login extends React.Component{

    state = {
        username : '',
        password : ''
    }

   render(){
       return(
       <div className="loginform">
            <p>UserName</p>
            <input type="text" placeholder="username" autoFocus/>
            <p>Password</p>
            <input type="password" placeholder="Password"/><br/>
            <input type="submit" value="Login"/>
            <br/>
            <a href="" >Forgot your password</a>

            <br/>
            <a href="" >New user</a>


       </div>
       );
   }


}

export default Login;
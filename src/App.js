import React from 'react';
//import ReactDOM from 'react-dom';
import './css/App.css';
import EmployeeInfo from './Employee/employeeinfo'; 
import BusList from './Bus/BusList';
import Header from './Header'
import Login from './Login';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends React.Component{

    state = {
        company:'BusCompany',
        buses:[
            {
                busId:11,
                busName:'volvo'
            },
            {
                busId:12,
                busName:'MRF'
            }
        ]
    }


    clickhandler = (event) =>{

        console.log("clicked");
        
            this.setState(
                {
                    buses:[
                        {
                            busId:11,
                            busName:'volvo_changes'
                        },
                        {
                            busId:12,
                            busName:'MRF_modified'
                        }
                    ] 
                }
            )
    }


    changeHandler = (event) => {
        console.log("changes text field");
        this.setState(
            {
                buses:[
                    {
                        busId:11,
                        busName:event.target.value
                    },
                    {
                        busId:12,
                        busName:event.target.value
                    }
                ] 
            }
        )
    }

    render(){
        return (
           
            <Login/>
        )
           


       
     
    }
}

export default App;


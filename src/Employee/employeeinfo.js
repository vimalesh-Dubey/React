import React from 'react';
//import ReactDom from 'react-dom';


class EmployeeInfo extends React.Component{
    render(props){
        return(
            <div>
                employee info
                <p>name:{this.props.name} and age:{this.props.age}</p>
            </div>
        );
    }
}

export default EmployeeInfo;

//const app = document.getElementById('root');
//ReactDOM.render(<EmployeeInfo/>,app);
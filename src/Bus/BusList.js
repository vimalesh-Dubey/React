import React from 'react';
import SingleBus from './singleBus';


const BusList = (props) =>{

    return(
         <div>
             <ul>
                 {
                    props.allBus.map((obj,id) =>{
                        return(
                            // <li key={id}>key :{id} and value:{obj.busName}</li>
                            <div>
                            {/* <button onClick={props.click}>change age</button>  */}
                            <SingleBus changed={props.changed} click = {props.click} key={id} bus={obj}/>
                        </div>
                        )
                    }
                )
                 }
            
             </ul>
         </div>
    )
};

export default BusList;
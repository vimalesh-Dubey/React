import React from 'react';
import '../css/Bus.css';

const SingleBus = (props) => {
    return(
         <div  className="bus">
             <label>Bus Id</label>:{props.bus.busId}
             <br/>
             <label>Bus Name</label>:{props.bus.busName}
             <input id={props.key1} type="text" value={props.bus.busName} onChange={props.changed.bind(this)}/>
             <br/>
              <button onClick={props.click}>change age</button>            
             {/* perform routing here */}
 
         </div>
    )
};

export default SingleBus;
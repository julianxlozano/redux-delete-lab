import React from 'react'

const Band = props => {

 
    return(
      <div>
        <li>{props.name}</li><button onClick={()=>props.delete(props.band.id)}>DELETE</button>
        {console.log(props.band.id)}
      </div>
    );
  
};

export default Band;

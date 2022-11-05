import React from 'react';
import { Checkmark } from 'react-checkmark'

const exports = {};

exports.Outcome = class extends React.Component {
  render() {
    const {result, factoryName, warehouseName, timestamp} = this.props;

    if(result == true){
      return(
        <div className='Outcome'>
          Transaction History: <br/>
          <pre>   {timestamp}</pre><br/> 
          <pre>   {warehouseName}</pre>&rarr; &emsp;
          <pre>   {factoryName}</pre>
          <br/><br/>

          Request to transfer raw material from warehouse is accepted by the factory. 
          <br/>
          Warehouse should proceed the transfer shortly.
          <br/>
          Thank you for joining the network.
          <br/>
          <br/>
          <Checkmark size='128px' color='#749F82' />
        </div>
      )
    } 
    else if(result==false){
      return(
        <div>
          Request to transfer raw material from warehouse is rejected by the factory.
          <br/>
          Thank you for joining the network.
          <br/>
          <br/>
          
        </div>
      )
    }
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}


export default exports;
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
          <pre className='time'>{timestamp}</pre><br/> 
          <pre className='name'>{warehouseName}</pre>&darr; &emsp;
          <pre className='name'>{factoryName}</pre>
          <br/><br/>

          Request to transfer raw material from warehouse is accepted by the factory. <br></br>
          Warehouse will proceed the transfer shortly.<br></br>
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
          <Checkmark size='128px' color='red' />
        </div>
      )
    }
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        <br/><br/>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}


export default exports;

import React from 'react';

const exports = {};

exports.Outcome = class extends React.Component {
  render() {
    const {result, factoryName, warehouseName, timestamp} = this.props;

    if(result == true){
      return(
        <div className='Outcome'>
          Transaction History: <br/>
          <pre>{timestamp}</pre><br/> 
          <pre>{warehouseName}</pre>&rarr; &emsp;
          <pre>{factoryName}</pre>
          <br/><br/>

          Request to transfer raw material from warehouse is accepted by the factory. 
          Warehouse should proceed the transfer shortly.
          Thank you for joining the network.
        </div>
      )
    } 
    else if(result==false){
      return(
        <div>
          Request to transfer raw material from warehouse is rejected by the factory.
          Thank you for joining the network.
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
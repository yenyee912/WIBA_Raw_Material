import React from 'react';

const exports = {};

exports.Outcome = class extends React.Component {
  render() {
    const {result} = this.state || {};

    if(result == true){
      return(
        <div>
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
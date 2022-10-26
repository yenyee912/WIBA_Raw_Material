import React from 'react';
import commonInteract from './commonInteract';

const exports = {...commonInteract};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>Deployer (Warehouse)</h2>
        {content}
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {inventoryWarehouse, supplierID, supplierName, staffID, staffName, materialID, materialName, batchNumber, quantity} = this.state || {};
    return (
      <div className='form-box'>
        Warehouse's current inventory number (integer):&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({inventoryWarehouse : e.currentTarget.value})}/>
        <br/> 
        <br />
        SupplierID:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({supplierID : e.currentTarget.value})}
        /> 
        <br />
        SupplierName:&nbsp;  
        <input
        type='text'
        onChange={(e) => this.setState({supplierName : e.currentTarget.value})}
        /> 
        <br />
        
        StaffID:&nbsp; 
        <input
        type='text'
        onChange={(e) => this.setState({staffID : e.currentTarget.value})}
        /> 
        <br />
        StaffName:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({staffName : e.currentTarget.value})}
        /> 
        <br />
        MaterialID:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({materialID : e.currentTarget.value})}
        /> 
        <br />
        MaterialName:&nbsp; 
        <input
        type='text'
        onChange={(e) => this.setState({materialName : e.currentTarget.value})}
        /> 
        <br />
        Batch Number:&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({batchNumber: e.currentTarget.value})}
        /> 
        <br />
        Quantity (integer):&nbsp;
        <input
        type='text'
        onChange={(e) => this.setState({quantity: e.currentTarget.value})}
        />
        <br />
        <br />
        Deploy the smart contract
        <br />
        <button
          onClick={() => parent.deploy(inventoryWarehouse, supplierID, supplierName, staffID, staffName, materialID, materialName, batchNumber, quantity)}>
          Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}


export default exports;
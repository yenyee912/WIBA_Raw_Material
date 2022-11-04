import React from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import commonInteract from './commonInteract';

const exports = {...commonInteract};


exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <div className="headerbar">
            <b className="user">Welcome, Factory</b>
        </div>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
    render() {
        const {parent} = this.props;
        const {factoryName, inventoryFactory, ctcInfoStr} = this.state || {};
        return (
            <div>
                Factory's Name:
                <input
                type='text'
                onChange={(e) => this.setState({factoryName : e.currentTarget.value})}
                /> 
                <br />
                Factory's current inventory number (integer):
                <input
                type='text'
                onChange={(e) => this.setState({inventoryFactory : e.currentTarget.value})}
                /> 
                <br />
                <br />
                Please paste the contract info to attach to Warehouse's network:
                <textarea spellCheck="false"
                    className='ContractInfo'
                    onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
                    placeholder='{}'
                />
                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    onUpdate={(err, result) => {
                      if (result) this.setState({ctcInfoStr:result.text});
                      else console.log('Not found');
                    }}
                  />
                <br />
                <button
                    disabled={!ctcInfoStr}
                    onClick={() => parent.attach(factoryName, inventoryFactory, ctcInfoStr)}
                >Attach</button>
            </div>
        );
    }
}
  
exports.Attaching = class extends React.Component {
    render() {
        return (
        <div>
            Request to attach to Warehouse's network, please wait...
          <div class="load">Loading
          <span></span>
          </div>
          <div class="box"></div>
        </div>
        );
    }
}

exports.AcceptMaterial = class extends React.Component {
  render() {
    const {supplierID, supplierName, materialID, materialName, batchNumber, quantity, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div className='TransactionInfo'>
        Welcome to the warehouse's network.
        Do you want to accept the raw material from warehouse with details as below: 
        <pre>
          <br />Supplier ID: {supplierID}
          <br />Supplier Name: {supplierName}
          <br />Material ID: {materialID}
          <br />Material Name: {materialName}
          <br />Material Batch Number: {batchNumber}
        </pre>
        Quantity to be transferred: {quantity}
        <br />
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.response(true);
          }}
        >Accept</button>
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.response(false);
          }}
        >Reject</button>

      </div>
    );
  }
}


exports.PublishResult = class extends React.Component {
  render() {
    return (
      <div>
        Sending your response to blockchain. Please wait...
        <div class="load">Loading
          <span></span>
        </div>
      </div>
      
    );
  }
}

export default exports;
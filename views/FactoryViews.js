import React from 'react';
import commonInteract from './commonInteract';

const exports = {...commonInteract};


exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Attacher (Factory)</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
    render() {
        const {parent} = this.props;
        const {inventoryFactory, ctcInfoStr} = this.state || {};
        return (
            <div>
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
                <br />
                <button
                    disabled={!ctcInfoStr}
                    onClick={() => parent.attach(inventoryFactory, ctcInfoStr)}
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
      </div>
    );
  }
}

export default exports;